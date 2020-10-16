import { Component, OnInit } from '@angular/core';
import { ApiService, LibraryData } from '../_services/api.service';
import { HttpClient, HttpHeaders } from '@Angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean;
  data: any;
  data1: any;
  showAddForm = false;
  showHowWorks = false;

  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    this.getData();
  }


  getData() {
    this.api.getData().subscribe((res) => {
      this.data = res;
      this.data1 = 'test';
      this.loading = false;
      console.log(this.data);
    }, (error) => {
      console.log(error);
    });
  }

  addNewItem(data) {
    // console.log(data);
    this.data = this.data.concat(data);
    this.showAddForm = false;
  }

  howDoesItWork() {
    this.showAddForm
  }

}
