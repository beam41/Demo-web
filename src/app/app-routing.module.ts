import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishingComponent } from './wishing/wishing.component';
import { AboutComponent } from './about/about.component';
import { AddWishComponent } from './add-wish/add-wish.component';
import { EditWishComponent } from './edit-wish/edit-wish.component';

const routes: Routes = [
  { path: 'wish', component: WishingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-wish', component: AddWishComponent },
  { path: 'edit-wish/:id', component: EditWishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
