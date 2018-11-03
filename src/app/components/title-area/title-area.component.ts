import { Component, Input } from '@angular/core';


@Component({
    selector: 'div[com-title-area]',
    templateUrl: './title-area.component.html',
    styleUrls: ['./title-area.component.css']
  })

export class TitleAreaComponent {
    @Input() titleText: String;
    @Input() subtitleText: String;
    @Input() bgImage: String;
    bgImageUrl: String;

    constructor() {
        this.bgImageUrl = `url(${this.bgImage})`;
    }
   
}