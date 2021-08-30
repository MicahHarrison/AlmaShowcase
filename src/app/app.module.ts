import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import {MatIconModule} from "@angular/material/icon";
import { CommissionComponent } from './commission/commission.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { GalleryCardMasonryComponent } from './gallery-card-masonry/gallery-card-masonry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LinksComponent } from './links/links.component';
import { CommissionspageComponent } from './commissionspage/commissionspage.component';
import { appRoutingModule } from './app.routing';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';



@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CommissionComponent,
    GalleryCardComponent,
    GalleryCardMasonryComponent,
    LinksComponent,
    CommissionspageComponent,
    HomepageComponent,
    AboutmeComponent,
    GallerypageComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    NgxMasonryModule,
    ReactiveFormsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}


