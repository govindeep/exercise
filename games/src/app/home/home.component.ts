import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { GameStatus } from '../shared/enums/game-status.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gamesList$: Observable<any[]>;

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() {
    this._loadGamesList();
  }

  private _loadGamesList(): void {
    this.gamesList$ = this._homeService.getGamesList(GameStatus.Joining);
  }

}
