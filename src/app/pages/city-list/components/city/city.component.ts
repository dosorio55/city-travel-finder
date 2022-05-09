import { Component, Input, OnInit } from '@angular/core';
import { ICity } from '../../models/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() public city?: ICity;
  @Input() public canDelete: boolean = false;
  
  public favorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public clickFavorite (){
    this.favorite = !this.favorite
  }
}
