import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { InputSearchComponent } from '../components/input-search/input-search.component';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
  },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    HomeComponent,
    InputSearchComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    RippleModule,
    ButtonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
