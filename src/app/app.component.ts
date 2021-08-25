import {Component} from '@angular/core';
import {ArtComponent} from "./art";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'AlmaShowcase';
  arts: ArtComponent[] = [];
  constructor() {
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
    this.arts.push(new ArtComponent("this", "temp"))
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
