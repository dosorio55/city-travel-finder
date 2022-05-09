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
  public modify: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onModify(){
    this.modify = !this.modify;
  }

  onDelete(id: string){
    this.listedCities = this.listedCities.filter(city => city.id !== id)
  }

}
