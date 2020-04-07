import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-main',
  templateUrl: './image-main.component.html',
  styleUrls: ['./image-main.component.css']
})
export class ImageMainComponent implements OnInit {

  @Input() url:string;
  @Input() sizeW:string = '850';
  @Input() sizeH:string = '250';

  urlStyle:string;
  sizeClassName:string
  constructor() { }

  ngOnInit(): void {
  }

}
