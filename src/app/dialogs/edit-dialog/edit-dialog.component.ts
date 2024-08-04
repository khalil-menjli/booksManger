import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/services/books.service';
import { TableComponent } from 'src/app/table/table.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
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
          console.error('Error fetching book with ID 1', error);
        }
      );
  }

  name!: string;
  author!: string;
  rating!: number;
  pages!: number;
  pagesRead!: number;
  category!: string;

  onSubmit() {
    if (this.name != '' && this.author != '' && this.pages != null) {
      
        this.book.name = this.name;
        this.book.auther = this.author
        this.book.rating = this.rating
        this.book.pages = this.pages
        this.book.pagesRead = this.pagesRead
        this.book.category = this.category
      this.booksServices.updateBooks(this.book).subscribe(
        (data) => {
         
          console.log('Book updated successfully', data);
          this.dialogRef.close("Updated"); 
        },
        (error) => {
          console.error('Error updating book', error);
          alert('Error updating book');
        }
      );
    }
  }
}
