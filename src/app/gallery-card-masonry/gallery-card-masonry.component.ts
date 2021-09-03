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

  shuffle(array: Array<ArtComponent>) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
