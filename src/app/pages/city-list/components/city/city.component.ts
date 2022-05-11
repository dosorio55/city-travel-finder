import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICity } from '../../models/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() public city?: ICity;
  @Input() public canDelete: boolean = false;
  @Output() public delete: EventEmitter<void> = new EventEmitter();
  @Output() public isSelected: EventEmitter<boolean> = new EventEmitter();

  
  public favorite: boolean = false;
  public selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public clickFavorite (){
    this.favorite = !this.favorite
  }

  public onDelete () {
    this.delete.emit();
  }

  public imgSelected (){
    this.selected = !this.selected;
    this.isSelected.emit(this.selected);

  }
}
