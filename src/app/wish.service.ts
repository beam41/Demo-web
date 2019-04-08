import { Injectable } from '@angular/core';
import { Wish } from './wish';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WishService {

  private url = 'http://localhost:3000/wish';

  constructor(private http: HttpClient) { }

  getWishes(): Observable<Wish[]> {
    return this.http.get<Wish[]>(this.url).pipe(
        tap(_ => console.log('fetched wishes')),
        catchError(this.handleError<Wish[]>('getWishes', []))
      );
  }

  getWish(id: number): Observable<Wish> {
    const idurl = `${this.url}/${id}`;
    return this.http.get<Wish>(idurl).pipe(
      tap(_ => console.log(`fetched wish id=${id}`)),
      catchError(this.handleError<Wish>(`getWish id=${id}`))
    );
  }

  updateWish(wish: Wish): Observable<any> {
    const idurl = `${this.url}/${wish.id}`;
    return this.http.put(idurl, wish, httpOptions).pipe(
      tap(_ => console.log(`updated wish id=${wish.id}`)),
      catchError(this.handleError<any>('updateWish'))
    );
  }

  deleteWish(wish: Wish): Observable<Wish> {
    const idurl = `${this.url}/${wish.id}`;
    return this.http.delete<Wish>(idurl, httpOptions).pipe(
      tap(_ => console.log(`deleted wish id=${wish.id}`)),
      catchError(this.handleError<Wish>('deleteWish'))
    );
  }

  addWish(wish: Wish): Observable<Wish> {
    return this.http.post<Wish>(this.url, wish, httpOptions).pipe(
      tap((newWish: Wish) => console.log(`added wish w/ id=${newWish.id}`)),
      catchError(this.handleError<Wish>('addWish'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
