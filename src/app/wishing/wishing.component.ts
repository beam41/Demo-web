import { Component, OnInit } from '@angular/core';
import { Wish } from '../wish';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wishing',
  templateUrl: './wishing.component.html',
  styleUrls: ['./wishing.component.css']
})
export class WishingComponent implements OnInit {

  wishes: Wish[];

  constructor(private wishService: WishService) { }

  ngOnInit() {
    this.getWishes();
  }

  getWishes(): void {
    this.wishService.getWishes().subscribe(wishes => this.wishes = wishes);
  }



}
