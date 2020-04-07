import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-describe',
  templateUrl: './text-describe.component.html',
  styleUrls: ['./text-describe.component.css']
})
export class TextDescribeComponent implements OnInit {

  @Input() text:string

  constructor() { }

  ngOnInit(): void {
  }

}
