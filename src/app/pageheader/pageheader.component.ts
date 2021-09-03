import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent implements OnInit {

  @Input() header!: String
  constructor() { }

  ngOnInit(): void {
  }

}
