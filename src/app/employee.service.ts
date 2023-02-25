import {Injectable, PipeTransform} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Iemployee} from './iemployee';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {ObjectEmp} from "./object-emp";


@Injectable({providedIn: 'root'})
export class EmployeeService {
  constructor( private http: HttpClient) {}
  loademployees(): Observable<ObjectEmp> {
        return   this.http.get<ObjectEmp>('https://dummy.restapiexample.com/api/v1/employees')
  }}
