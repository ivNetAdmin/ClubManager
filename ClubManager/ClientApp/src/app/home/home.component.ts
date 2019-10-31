import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  club: string;

  constructor(private route: ActivatedRoute) {
    this.club = route.snapshot.paramMap.get('id');
  }

}
