import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public state:string;
  public timesTapped: number;
  public timesPressed: number;

  constructor(public navCtrl: NavController) {

    this.state = "Tap twice, press four times";
    this.timesTapped = 0;
    this.timesPressed = 0;
  }

  resetAllWasClicked(){
    this.timesPressed=0;
    this.timesTapped = 0;
    this.checkIfUserWon();
  }

  resetTapWasClicked(){
    this.timesTapped = 0;
    this.checkIfUserWon();
  }

  resetPresspWasClicked(){
    this.timesPressed=0;
    this.checkIfUserWon();
  }

  tapWasClicked(){
    this.timesTapped ++;
    this.checkIfUserWon();
  }

  pressWasClicked(){
    this.timesPressed ++;
    this.checkIfUserWon();
  }

  checkIfUserWon(){
    if( this.timesPressed == 4 && this.timesTapped == 2 ){
     this.state ="You Won mannn!";
    } else {
      this.state = "Tap twice, press four times";
    }
  }

}
