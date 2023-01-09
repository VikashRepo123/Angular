import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import {EmployeeData} from './employee-dashboard.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue!: FormGroup;
  constructor(private formBuilder: FormBuilder,private apiService: ApiService) { }

  employeeModelObj: EmployeeData = new EmployeeData();

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
    this.getAllEmployee();
  }

  headO: string = '';
  showAddEmpBtn: boolean = false;
  setHead(checks: string) {
    if(checks === 'edit') {
      this.headO = checks;
      this.showAddEmpBtn = false;
    } else if (checks === 'add employee') {
      this.headO = checks;
      this.showAddEmpBtn = true;
      this.formValue.reset();
    }
  }

  createNewEmployee() {
    this.employeeModelObj.fname = this.formValue.value.fname;
    this.employeeModelObj.lname = this.formValue.value.lname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;
    // console.log(this.employeeModelObj);
    this.apiService.postEmployee(this.employeeModelObj)
    .subscribe((res) => {
      console.log(res);
      this.formValue.reset();
      document.getElementById('cancel')?.click();
      this.getAllEmployee();
    }, (err) => {
      console.log(err);
    })
  }

  employeeData: any;
  getAllEmployee() {
    this.apiService.getEmployee()
    .subscribe((res) => {
      console.log(res);
      this.employeeData = res;
    }, (err) => {
      console.log(err);
    })
  }

  deleteEmp(id: number) {
    this.apiService.deleteEmployee(id)
    .subscribe((res) => {
      console.log(res);
      this.getAllEmployee();
    }, (err) => {
      console.log(err);
    })
  }

  onEdit(row: any) {
    this.employeeModelObj.id = row.id;
    this.formValue.controls['fname'].setValue(row.fname);
    this.formValue.controls['lname'].setValue(row.lname);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }

  updateEmployeeDetails() {
    this.employeeModelObj.fname = this.formValue.value.fname;
    this.employeeModelObj.lname = this.formValue.value.lname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.apiService.updateEmployee(this.employeeModelObj.id, this.employeeModelObj)
    .subscribe((res) => {
      console.log(res);
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAllEmployee();
    }, (err) => {
      console.log(err);
    })
  }

}
