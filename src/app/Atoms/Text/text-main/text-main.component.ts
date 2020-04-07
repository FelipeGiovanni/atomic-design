import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-main',
  templateUrl: './text-main.component.html',
  styleUrls: ['./text-main.component.css']
})
export class TextMainComponent implements OnInit {

  @Input() text:string
  
  constructor() { }

  ngOnInit(): void {
  }

}
