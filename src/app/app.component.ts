import { Component } from '@angular/core';
import { playersData } from '../data/players.data';
import { Player } from 'src/model/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  playerlist = playersData;

 onPlayerSelected(player:Player){
  console.log("App Funcionando", player );
  }
}
