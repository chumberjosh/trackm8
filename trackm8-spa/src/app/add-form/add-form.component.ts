import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { e } from '@angular/core/src/render3';
import { LibraryData } from '../_services/api.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  model: any = {};
  @Output() addItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelItem: EventEmitter<any> = new EventEmitter<any>();
  adding = false;
  showError = false;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    // Do validation checks here
    const validated = true;
    if (validated) {
      this.add();
    } else {
      this.showError = true;
    }
  }

  add() {
    this.adding = true;
    setTimeout(() => {
      this.addItem.emit(this.model);
    },
      1000);
  }

  cancel() {
    this.cancelItem.emit();
  }

}
