import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { GameStatus } from '../shared/enums/game-status.enum';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gamesList$: Observable<any[]>;
  getListError = false;
  noGamesFound = false;

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() {
    this._loadGamesList();
  }

  /**
   * @name _loadGamesList
   * @description attaches the gamesList observable to the service response
   */
  private _loadGamesList(): void {
    this.gamesList$ = this._homeService.getGamesList(GameStatus.Joining)
      .pipe(
        catchError((err) => {
          this.getListError = true;
          return throwError(err);
        }),
        map(data => this._formatGamesData(data))
      )
  }

  /**
   * @name _formatGamesData
   * @description formats games data
   * @param {Array} data games list data from planets
   * @returns {Array} array of formatted games data
   */
  private _formatGamesData(data: []) {
    if (data.length > 0) {
      return data.map((game: any) => {
        return {
          name: game.name,
          shortDescription: game.shortdescription,
          dateCreated: game.datecreated,
          createdBy: game.createdby === 'none' ? '' : game.createdby,
          hostDays: game.hostdays,
          password: game.password.length > 0,
          url: `${environment.planetsGameInfoUrl}?gameid=${game.id}` // Assumption: Not sure what the url to review the game is using this
        }
      })
    } else {
      this.noGamesFound = true;
      return null;
    }
  }

}
