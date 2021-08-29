import {Component, Input, OnInit} from '@angular/core';
import {ArtComponent} from "../art";

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {

  @Input() commissions!: ArtComponent[];
  @Input() price!: string;
  @Input() category!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
