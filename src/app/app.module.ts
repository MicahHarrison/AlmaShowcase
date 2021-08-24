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



@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
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


