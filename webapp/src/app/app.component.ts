import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webapp';
  constructor() { }
  ngOnInit(): void {
    
  }
  pp:String="<strong>Play</strong>";

  play:boolean=false;

  playAudio(){
    let icon = document.getElementById("icon");
    let audio = new Audio();
    audio.src = "../assets/media/Kya Loge Tum.mp3"
    audio.load();
    audio.play();
    this.pp= "<strong>Pause</strong>";
    
}
  
  
  

}

