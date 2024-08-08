import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  // templateUrl: './sales-person-list.component.html',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of sales person
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup@gmail.com', 50000),
    new SalesPerson('John', 'Doe', 'john@gmail.com', 40000),
    new SalesPerson('Claire', 'Murphy', 'claire@gmail.com', 90000),
    new SalesPerson('Mai', 'Tran', 'mai@gmail.com' , 60000),
    new SalesPerson('Nate', 'Smith', 'nate@gmail.com', 100000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
