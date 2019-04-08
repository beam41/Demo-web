import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Wish } from '../wish';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-edit-wish',
  templateUrl: './edit-wish.component.html',
  styleUrls: ['./edit-wish.component.css']
})
export class EditWishComponent implements OnInit {

  selectedWish: Wish;

  constructor(
    private route: ActivatedRoute,
    private wishService: WishService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getWish();
  }

  getWish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.wishService.getWish(id).subscribe(wish => this.selectedWish = wish);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.wishService.updateWish(this.selectedWish).subscribe(() => this.goBack());
  }

  delete(): void {
    this.wishService.deleteWish(this.selectedWish).subscribe(() => this.goBack());
  }
}
