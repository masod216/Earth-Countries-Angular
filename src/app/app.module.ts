import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DataService } from './table/table.service';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';



const myRoutes: Routes = [
  {path: 'map', component: MapComponent },
  {path: 'table', component: TableComponent},
  {path: '' ,component: MapComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MapComponent,
    FooterComponent,
    

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
  ],
  exports: [ RouterModule ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
