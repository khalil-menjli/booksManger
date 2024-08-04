import { Component } from '@angular/core';
import { Books } from '../models/books';
import { BooksService } from '../services/books.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  allBooks!: Books[];
  book!: Books;
  constructor(
    public snackBar: MatSnackBar,
    public booksServices: BooksService,
    public dialog: MatDialog
  ) {
    this.booksServices.getAllBooks().subscribe(
      (data) => {
        this.allBooks = data;
      },
      (error) => {
        alert('erorr');
      }
    );
   
  }
  openSnackBar(message: string) {
    this.snackBar.open(`the Book  ${message} successfully`, 'OK', {
      duration: 5000,
    });
  }

  dialogComponent = [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
  ];
  openDialog(componentType: any, id?: number): void {
    const dialogRef = this.dialog.open(componentType, {
      width: '700px',

      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Deleted" || result == "Updated" || result == "Added") {
       
        this.openSnackBar(result);

      }
    });
  }
}
