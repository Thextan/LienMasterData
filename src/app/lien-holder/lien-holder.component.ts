import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LienHolder } from '../Lien-Holder';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-lien-holder',
  templateUrl: './lien-holder.component.html',
  styleUrls: ['./lien-holder.component.css']
})

export class LienHolderComponent implements OnInit {

  lienholders: LienHolder[];
  private lienholdersUrl = 'api/lienholders';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit() {
    this.getLienHolders();
  }
  getLienHolders(): Observable<LienHolder> {
    const url = `${this.lienholdersUrl}/${id}`;
    return this.http.get<LienHolder>(this.lienholdersUrl)
      .pipe(
        tap(_ => this.log(`fetched lienholder id=${id}`)),
        catchError(this.handleError<LienHolder>(`getLienHolder id=${id}`, []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  private log(message: string) {
    this.messageService.add(`LiendataService: ${message}`);
  }
  updateLienHolder(lienholder: LienHolder): Observable<any> {
    return this.http.put(this.lienholdersUrl, lienholder, this.httpOption).pipe(
      tap(_ => this.log(`update lienholder id=${lienholder.id}`)),
      catchError(this.handleError<any>('updateLienHolder'))
    );
  }

}
