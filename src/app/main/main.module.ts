import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
   MainRoutingModule,
   CommonModule,
   ReactiveFormsModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }