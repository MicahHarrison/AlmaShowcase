import { Component, OnInit } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {ArtComponent} from "../art";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  arts: ArtComponent[] = [];
  constructor() { }

  ngOnInit(): void {
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
  }

}
