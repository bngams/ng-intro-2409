import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCustomTransformationPipe } from './pipes/my-custom-transformation.pipe';

@Component({
  selector: 'app-root', // <app-root> html markup
  standalone: true, // since angular 18
  imports: [RouterOutlet, MyCustomTransformationPipe, UpperCasePipe, NgClass, NgIf, NgFor], // load features
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // inline mode
  // template: `
  //   <h1>Welcome</h1>
  // `,
  // styles : ...
})
// export = public
export class AppComponent implements OnInit {

  // /!\ private vs. readonly vs. public (by default)
  title = 'first-app';
  private _subTitle = 'first-app';
  words: string[] = [];

  imgUrl = 'https://picsum.photos/200';
  isValid = true;

  // only DI ?
  constructor() {
    // prefer lifecycle hooks like ngOnInit
    // this.init();
  }

  ngOnInit(): void {
    this.init();
  }

  // /!\ accessor usage or method usage in templates
  getTitle(): string {
    console.log('call get title');
    return this.title;
  }

  // TS accessors
  get subTitle(): string {
    return this._subTitle;
  }


  private init(){
    // loadWords
    this.loadWords();
  }

  private loadWords() {
    this.words = ['word 1', 'word 2', 'word ...',]
  }

  toggleValidity(): void {
    this.isValid = !this.isValid;
  }
}
