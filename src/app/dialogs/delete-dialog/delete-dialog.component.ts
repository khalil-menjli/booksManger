import { Component, Inject } from '@angular/core';
import { TableComponent } from 'src/app/table/table.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BooksService } from 'src/app/services/books.service';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent {
  book! : Books;
  constructor(
    private dialogRef: MatDialogRef<TableComponent>,
    public booksServices: BooksService,
    @Inject(MAT_DIALOG_DATA) public date: { id: number }
  ) {
    this.booksServices.getBooks(this.date.id).subscribe(
      (data) => {
        this.book = data;
        console.log(this.book.name);
      },
      (error) => {
        console.error('Error fetching book with ID ', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }

  onDelete(): void {
    this.booksServices.deleteBooks(this.date.id).subscribe(
      (data) => {
        console.log(this.book.name);
        this.dialogRef.close("Deleted");
      },
      (error) => {
        console.error('Error fetching book with ID ', error);
      }
    );
    
  }
}
