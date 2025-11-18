import { Component, OnInit, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  version = 'Angular: v' + VERSION.full;
}


