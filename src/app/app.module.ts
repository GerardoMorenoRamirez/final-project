import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeeComponent } from './employee/employee.component';

import { FetchdataService } from './fetchdata.service';

@NgModule({
  declarations: [				
    AppComponent,
      HomeComponent,
      CounterComponent,
      FetchDataComponent,
      EmployeeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{
      dataEncapsulation:false
    })
  ],
  providers: [
    {provide:"Base_URL", useFactory:getBaseUrl},
    FetchdataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl(){
  return document.getElementsByTagName("base")[0].href;
}