import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeedashboardRoutingModule } from './employeedashboard-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, EmployeedashboardRoutingModule],
})
export class EmployeedashboardModule {
  id: number = 0;
  firstName: any = '';
  lastName: any = '';
  email: any = '';
  mobile: any = '';
  salary: any = '';
}
