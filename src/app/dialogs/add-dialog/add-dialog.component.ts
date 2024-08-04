import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/services/books.service';
import { TableComponent } from 'src/app/table/table.component';


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],

})
export class AddDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<TableComponent>,
    public booksServices: BooksService
  ) {}

  name!: string;
  author!: string;
  rating!: number;
  pages!: number;
  pagesRead!: number;
  category!: string;

  onSubmit() {
    if (this.name != '' && this.author != '' && this.pages != null) {
      const newBook: Books = new Books(
        this.name,
        this.author,
        this.rating,
        this.pages,
        this.pagesRead,
        this.category
      );
      this.booksServices.addBooks(newBook).subscribe(
        (data: Books) => {
          // Handle successful addition
          console.log('Book added successfully', data);
          this.dialogRef.close("Added"); // Close the dialog with the response data
        },
        (error: Books) => {
          console.error('Error adding book', error);
          alert('Error adding book');
        }
      );
    }
  }
}
