import {Component, Input, OnInit} from '@angular/core';
import {ArtComponent} from "../art";

@Component({
  selector: 'app-gallery-card-list',
  templateUrl: './gallery-card-list.component.html',
  styleUrls: ['./gallery-card-list.component.css']
})
export class GalleryCardListComponent implements OnInit {

  @Input() arts!: ArtComponent[];
  constructor() { }

  ngOnInit(): void {
  }

}
