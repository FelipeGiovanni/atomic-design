import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-aux',
  templateUrl: './image-aux.component.html',
  styleUrls: ['./image-aux.component.css']
})
export class ImageAuxComponent implements OnInit {

  @Input() url:string;
  @Input() sizeW:string = '250';
  @Input() sizeH:string = '350';

  urlStyle:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.urlStyle= `url(${this.url})`;
  }

}
