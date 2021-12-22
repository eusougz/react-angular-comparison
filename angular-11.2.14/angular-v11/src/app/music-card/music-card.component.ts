import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() favorite = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite(): void {
    this.favorite = !this.favorite;
  }
}
