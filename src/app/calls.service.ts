import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin, combineLatest } from 'rxjs';
import { map, switchMap, debounceTime, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private httpClient: HttpClient) { }

  public getSources(){
    return this.httpClient.get("https://newsapi.org/v1/sources?apiKey=<YOUR_API_KEY>");   
  }


  public getData(source1, source2): Observable<any> {
    const option1 = this.httpClient.get("https://newsapi.org/v1/articles?source="+ source1 +"&sortBy=relevance&apiKey=<YOUR_API_KEY>");
    const option2 = this.httpClient.get("https://newsapi.org/v1/articles?source="+ source2 +"&sortBy=relevance&apiKey=<YOUR_API_KEY>");
    
    return combineLatest([
      option1.pipe(
        catchError(err => {
          console.log(err);
          return of(null);
        })
    ), 
      option2.pipe(
        catchError(err => {
          console.log(err);
          return of(null);
        })
    )]);
  }

}
