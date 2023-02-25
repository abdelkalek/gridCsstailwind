import {Component, OnInit} from '@angular/core';
import {ObjectEmp} from "./object-emp";
import {EmployeeService} from "./employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Iemployee} from "./iemployee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  employeeab: Iemployee[] = [];

  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute) {
  }
    ngOnInit(): void {
        this.empService.loademployees().subscribe({
          next: (res: ObjectEmp) => {
            console.log(res.data)
            this.employeeab = res.data;
          }
        });
    }
  title = 'testangular';

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      employee_name: {
        title: ' Name'
      },
      employee_salary: {
        title: 'Salary'
      },
      employee_age: {
        title: 'Age'
      },
      profile_image: {
        title: 'profile image'
      }
    }
  };
}
