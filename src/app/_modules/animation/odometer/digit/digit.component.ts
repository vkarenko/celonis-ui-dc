import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {

  @Input() rate: number;
  pace = 50;

  constructor() { }

  ngOnInit() {
    this.pace = this.pace * this.rate;
  }

}
