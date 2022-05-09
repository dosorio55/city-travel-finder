import { Component, OnInit } from '@angular/core';
import { cities } from './city-list.config';
import { ICity } from './models/city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  public listedCities: ICity[] = cities as ICity[];
  public filteredCities: ICity[] = this.listedCities;
  public modify: boolean = false;
  public filterValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onModify(){
    this.modify = !this.modify;
  }

  onDelete(id: string){
    this.filteredCities = this.listedCities.filter(city => city.id !== id)
  }

  onFilter (){
    this.filteredCities = this.listedCities.filter(city => {
      console.log(this.filterValue)
      return city.name.toLocaleLowerCase().includes(this.filterValue.toLocaleLowerCase())})
  }
}
