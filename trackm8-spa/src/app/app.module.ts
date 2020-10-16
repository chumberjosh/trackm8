import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@Angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { HomeComponent } from './home/home.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ApiService } from './_services/api.service';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TablePipe } from './_services/table.pipe';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingIndicatorComponent,
    TableComponent,
    TablePipe,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
