import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-text-subtitle',
  templateUrl: './text-subtitle.component.html',
  styleUrls: ['./text-subtitle.component.css']
})
export class TextSubtitleComponent implements OnInit {

  @Input() text:string

  constructor() { }

  ngOnInit(): void {
  }

}
