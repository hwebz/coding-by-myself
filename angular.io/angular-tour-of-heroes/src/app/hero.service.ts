import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/internal/operators";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Hero } from './hero';
//import { HEROES } from './mock-heroes'
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private httpClient: HttpClient,
              private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.messages.push(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    //this.log('HeroService: fetched heroes');
    //return of(HEROES);
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    )
  }

  getHero(id: number): Observable<Hero> {
    // this.log(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      )
  }

  updateHero(hero: Hero): Observable<any> {
    return this.httpClient.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const id = typeof hero === 'number' > hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.httpClient.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes match "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
