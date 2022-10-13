import { Injectable } from "@angular/core";

@Injectable()

export class DataService {
    countriesArray = [
        {name: 'Israel', population: 8000000, capital: 'Jerusalem'},
        {name: 'France', population: 60000000, capital: 'Paris'},
        {name: 'Frbe', population: 30000, capital: 'Paris'},
        {name: 'Frc', population: 6000, capital: 'Paris'},
        {name: 'Britain', population: 75000000, capital: 'London'},
        {name: 'Australia', population: 25000000, capital: 'Canberra'}
      ];
      
      tableColumns = ['name', 'capital', 'population'];
}