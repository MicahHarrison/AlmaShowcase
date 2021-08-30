import {Component, Input, OnInit} from '@angular/core';
import {ArtComponent} from "../art";
import {NgxMasonryOptions} from "ngx-masonry";

@Component({
  selector: 'app-gallery-card-masonry',
  templateUrl: './gallery-card-masonry.component.html',
  styleUrls: ['./gallery-card-masonry.component.css']
})
export class GalleryCardMasonryComponent implements OnInit {

  @Input() arts!: ArtComponent[];
  @Input() masonryOptions! : NgxMasonryOptions;
  constructor() { }

  ngOnInit(): void {
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }
}
