import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MethodListComponent } from './method-list/method-list.component';
import { SearchComponent } from './search/search.component';
import { SubsystemItemComponent } from './method-list/subsystem-item/subsystem-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MethodListComponent,
    SearchComponent,
    SubsystemItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }