import { Component } from '@angular/core';
import musics1000 from './musics-1000';
import musics5000 from './musics-5000';
import musics10000 from './musics-10000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-v11';

  musics: { name: string; favorite: boolean }[] = [];

  private _musics1000 = this.getMusics(musics1000);
  private _musics5000 = this.getMusics(musics5000);
  private _musics10000 = this.getMusics(musics10000);

  constructor() {}

  operation(
    op:
      | 'removeAllMusics'
      | 'favoriteAllMusics'
      | 'import1000Musics'
      | 'import5000Musics'
      | 'import10000Musics'
  ) {
    this[op]();
  }

  trackByFn(index: number): number {
    return index;
  }

  private removeAllMusics(): void {
    this.musics = [];
  }

  private favoriteAllMusics(): void {
    this.musics = this.musics.map((m) => ({ ...m, favorite: true }));
  }

  private import1000Musics(): void {
    this.musics.push(...this._musics1000);
  }
  private import5000Musics(): void {
    this.musics.push(...this._musics5000);
  }
  private import10000Musics(): void {
    this.musics.push(...this._musics10000);
  }

  private getMusics(musics: string[]): { name: string; favorite: boolean }[] {
    return musics.map((m) => ({
      name: m,
      favorite: false,
    }));
  }
}
