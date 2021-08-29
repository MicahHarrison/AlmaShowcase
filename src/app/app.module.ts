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
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { GalleryCardListComponent } from './gallery-card-list/gallery-card-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CommissionComponent,
    GalleryCardComponent,
    GalleryCardListComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}


