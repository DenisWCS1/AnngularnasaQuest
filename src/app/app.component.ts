import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
import { NasaData } from './models/nasa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ImgOfTheDay?: NasaData;
  showOverlay: boolean = false;
  IsHd: boolean = true;
  constructor(public nasaService: NasaService) {}

  toggleHD(): void {
    this.IsHd = !this.IsHd;
    console.log(this.IsHd);
  }
  fullscreen() {
    this.showOverlay = !this.showOverlay;
  }

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data) => {
      if (data && data) {
        this.ImgOfTheDay = data;
        console.log(this.ImgOfTheDay.url);
      } else console.log('erreur');
    });
  }
}
