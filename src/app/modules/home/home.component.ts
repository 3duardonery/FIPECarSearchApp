import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { catchError, of } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {

  placeholder: string = 'Busque seu carro';
  brands: any[] = [];
  carModels: any[] = [];
  carYears: any[] = [];
  typeOfVehicle: any[] = [
    {name: 'Carros', code: 'cars'},
    {name: 'Caminhões', code: 'trucks'},
    {name: 'Motos', code: 'motorcycles'},
  ];
  selectedBrand: any;
  selectedType!: any;
  selectedModel!: any;
  selectedYear!: any;
  showBrandOptions: boolean = false;
  showModelsOptions: boolean = false;
  showYearsOptions: boolean = false;

  searchedCar!: Car;

  constructor(private _carService: CarService,
    private _messageService: MessageService, private _primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this._primengConfig.ripple = true;
  }

  showErrorToast(message: string): void {
    this._messageService.add({severity:'error', summary: 'Error', detail: message});
  }

  async onChangeTypeOfVehicleEvent(event: any): Promise<any> {
    let vehicleType = event.value;
    
    var results$ = this._carService.getBrands(vehicleType.code);
    results$.pipe(
      catchError(
        error => of(this.showErrorToast(error))
      )
    );

    results$.subscribe(
      (data) => {
        this.brands = data;
      }
    );    

    this.showBrandOptions = true;
  }

  async onChangeBrandEvent(event: any): Promise<any> {
    let brandId = event.value.code;
    
    var results$ = this._carService.getCarModels(this.selectedType.code, brandId);
    results$.pipe(
      catchError(
        error => of(this.showErrorToast(error))
      )
    );

    results$.subscribe(
      (data) => {
        this.carModels = data;
      }
    );

    this.showModelsOptions = true;
  }

  async onChangeModelEvent(event: any): Promise<any> {
    let modelId = event.value.code;
    
    var results$ = this._carService.getModelsYears(this.selectedType.code, this.selectedBrand.code, modelId);
    results$.pipe(
      catchError(
        error => of(this.showErrorToast(error))
      )
    );

    results$.subscribe(
      (data) => {
        this.carYears = data;
      }
    );

  }

  submitSearch(): void {
    var results$ = this._carService.getFipeInfo(this.selectedType.code, this.selectedBrand.code, this.selectedModel.code, this.selectedYear.code);
    results$.pipe(
      catchError(
        error => of(this.showErrorToast(error))
      )
    );

    results$.subscribe(
      (data) => {
        this.searchedCar = data;
        console.log(this.searchedCar);
      }
    );
  }
}
