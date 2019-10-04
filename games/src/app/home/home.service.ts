import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GameStatus } from '../shared/enums/game-status.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient
  ) {}

  /**
   * @name getGamesList
   * @description Returns an array of games
   * @param status status of the game to get
   */
  public getGamesList(status?: GameStatus): Observable<any> {
    const requestUrl = `${environment.planetsUrl}games/list?status=${status}`;
    return this._http.get(requestUrl);
  }
}
