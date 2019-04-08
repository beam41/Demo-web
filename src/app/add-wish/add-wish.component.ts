import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Wish } from '../wish';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-add-wish',
  templateUrl: './add-wish.component.html',
  styleUrls: ['./add-wish.component.css']
})
export class AddWishComponent implements OnInit {

  constructor(
    private location: Location,
    private wishService: WishService,
    ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(name: string, text: string): void {
    name = name.trim();
    text = text.trim();
    if (!name) { return; }
    this.wishService.addWish({ name, text } as Wish).subscribe(() => this.goBack());
  }
}
