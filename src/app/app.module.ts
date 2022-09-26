import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountryListComponent} from './country-list/country-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataLoaderComponent} from './data-loader/data-loader.component';
import {MatButtonModule} from "@angular/material/button";
import {MypipePipe} from './pipes/mypipe.pipe';
import {InvoiceListComponent} from './invoice-list/invoice-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FirstPageComponent} from './pages/first-page/first-page.component';
import {SecondPageComponent} from './pages/second-page/second-page.component';
import {ThirdPageComponent} from './pages/third-page/third-page.component';
import {InvoicePageComponent} from './pages/invoice-page/invoice-page.component';
import {InvoiceTableComponent} from './invoice-table/invoice-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {InvoiceFormComponent} from './invoice-form/invoice-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    DataLoaderComponent,
    MypipePipe,
    InvoiceListComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    InvoicePageComponent,
    InvoiceTableComponent,
    InvoiceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
