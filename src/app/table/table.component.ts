import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

//@Injectable()
export class TableComponent implements OnInit {

  
  public filter: string;
  public numberOfCountries:number;

  get Filter() {
    return this.filter;
  }

  set Filter(val: string) {
    this.filter = val;
    //let newFilter = this.Filter.replace(' ', '');
    
    this.filteredCountries = this.countries.filter(e=>e.name.includes(this.Filter))
    this.numberOfCountries = this.filteredCountries.length;
  }

  constructor(private http: HttpClient) {
    
    console.log('Constructor')
  }
  data: any;
  countries: any;
  filteredCountries: any;

  xx = "80px";

  getData() {
    return this.data = this.http.get('https://restcountries.eu/rest/v2/all');
  }
  getDataNow() {
    this.countries = [];
    this.getData().subscribe(
      data => {this.data = data; },
      err => { console.log(err); },
      () => 
      { 
        this.countries = this.data;
        this.filteredCountries = [...this.data]; 
        this.numberOfCountries = this.filteredCountries.length;
      }
    );
  }

  details(i) {
    console.log(i);
  }
 ngOnInit(): void {
    console.log('On Init');
   this.getDataNow();
  }
}
