import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WishingComponent } from './wishing/wishing.component';
import { AddWishComponent } from './add-wish/add-wish.component';
import { EditWishComponent } from './edit-wish/edit-wish.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WishingComponent,
    AddWishComponent,
    EditWishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
