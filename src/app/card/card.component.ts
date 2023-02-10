import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from 'src/model/player.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input()
player!: Player;

@Output()
playerSelected = new EventEmitter<Player>();


OnCardClicked(){
  console.log("Funcionando");
  this.playerSelected.emit(this.player)
};

}
