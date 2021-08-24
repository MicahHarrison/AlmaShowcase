import { Component, OnInit, Input} from '@angular/core';
import {ArtComponent} from "../art";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() art!: ArtComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
