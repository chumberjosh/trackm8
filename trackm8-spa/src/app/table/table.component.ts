import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LibraryData } from '../_services/api.service';
import { TablePipe } from '../_services/table.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() headers: any;
  @Input() data: any;
  @Output() addItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  sortByHead(data) {
    console.log(data);
  }

  delete(item) {
    const index: number = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  addObject() {
    const item = {
      'LocationType': 'Test',
      'Name': 'Test',
      'Description': 'Test',
      'Url': 'Test',
      'Latitude': 50.918171,
      'Longitude': 0.48224952,
      'Town': 'Test'
    };
    this.add(item);
  }

  add(item) {
    this.addItem.emit();
  }

}
