import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { NavBarComponent } from "./views/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  constructor(
    private primeng: PrimeNG
  ){}
  ngOnInit(): void {
    this.primeng.ripple.set(true)
  }


  // title = 'comisionesFront';
}
