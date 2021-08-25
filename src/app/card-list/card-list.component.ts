import { Component, OnInit, Input } from '@angular/core';
import {ArtComponent} from "../art";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() arts!: ArtComponent[];
  constructor() { }

  ngOnInit(): void {
  }

}
