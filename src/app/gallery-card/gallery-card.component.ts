import {Component, Input, OnInit} from '@angular/core';
import {ArtComponent} from "../art";

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})
export class GalleryCardComponent implements OnInit {

  @Input() art!: ArtComponent;
  constructor() { }

  ngOnInit(): void {
  }

  public temp(): void {
    console.log("1")
  }
}
