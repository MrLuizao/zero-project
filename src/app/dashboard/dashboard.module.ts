import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [   
    ReactiveFormsModule,
    FormsModule, 
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule, 

  ]
})

export class DashboardModule { }
