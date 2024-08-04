import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiUrl = 'http://[::1]:3000/books';
  constructor(public httpclient: HttpClient) {}

  getAllBooks() {
    return this.httpclient.get<Books[]>(this.apiUrl);
  }

  getBooks(id: number) {
    return this.httpclient.get<Books>(this.apiUrl + '/' + id);
  }
  deleteBooks(id: number) {
    return this.httpclient.delete(this.apiUrl + '/' + id);
  }
  updateBooks(Books: Books) {
    return this.httpclient.put(`${this.apiUrl}/${Books.id}`, Books);
  }
  addBooks(Books: Books) {
    return this.httpclient.post<any>(this.apiUrl, Books);
  }
}
