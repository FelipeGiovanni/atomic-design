import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-tittle',
  templateUrl: './text-tittle.component.html',
  styleUrls: ['./text-tittle.component.css']
})
export class TextTittleComponent implements OnInit {

  @Input() text:string

  constructor() { }

  ngOnInit(): void {
  }

}
