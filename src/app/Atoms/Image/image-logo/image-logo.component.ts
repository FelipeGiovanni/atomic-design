import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-logo',
  templateUrl: './image-logo.component.html',
  styleUrls: ['./image-logo.component.css']
})
export class ImageLogoComponent implements OnInit {

  @Input() url:string;
  @Input() sizeW:string = '32';
  @Input() sizeH:string = '32';

  urlStyle:string;
  sizeClassName:string

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.urlStyle= `url(${this.url})`;
  }
}
