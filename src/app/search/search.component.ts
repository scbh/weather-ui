import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['./search.component.css']
  })
  
  export class SearchComponent implements OnInit {

    query;
    cancelActive = false;
    @Output() search: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        
    }
  }