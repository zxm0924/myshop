import { Component, OnInit } from '@angular/core';
import { Header } from '../header';
import { Headers } from '../mock-headers';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent implements OnInit {

  header: Header = {
  
    name: "情侣"
  };
  constructor() { }

  ngOnInit() {
  }

}
