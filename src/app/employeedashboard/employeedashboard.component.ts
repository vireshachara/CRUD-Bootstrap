import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Shared/api.service';
import { EmployeedashboardModule } from './employeedashboard.module';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.scss'],
})
export class EmployeedashboardComponent implements OnInit {
  loginForm: any;
  employeeModelObj: EmployeedashboardModule = new EmployeedashboardModule();
  employeeData : any ;

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      f_name: new FormControl('', [Validators.required]),
      l_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
    });

    this.getAllEmployee();
  }

  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.loginForm.value.firstName;
    this.employeeModelObj.lastName = this.loginForm.value.lastName;
    this.employeeModelObj.email = this.loginForm.value.email;
    this.employeeModelObj.mobile = this.loginForm.value.mobile;
    this.employeeModelObj.salary = this.loginForm.value.salary;

    this.api.postEmployee(this.employeeModelObj).subscribe(
      (res: any) => {
        console.log(res);
        alert('Employee Details Added Successfully');
        let ref = document.getElementById('cancel')
        ref?.click();
        this.loginForm.reset();
        this.getAllEmployee();
      },
      (eror: any) => {
        alert('Something went Wrong');
      }
    );
  }

  getAllEmployee(){
    this.api.getEmployee().subscribe(res=>{
      this.employeeData = res ;
    })
  }
}
