import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { SlaireComponent } from './slaire/slaire.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    TableComponent,
    EditDialogComponent,
    NavbarComponent,
    SlaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AddDialogComponent,],
  bootstrap: [AppComponent],
})
export class AppModule {}
