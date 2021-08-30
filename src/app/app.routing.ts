import { Routes, RouterModule } from '@angular/router';
import { CommissionspageComponent } from './commissionspage';
import {HomepageComponent} from "./homepage";
import {AboutmeComponent} from "./aboutme";
import {GallerypageComponent} from "./gallerypage";


const routes: Routes = [
  { path:'', redirectTo:'home',  pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'commission', component: CommissionspageComponent},
  { path: 'about', component: AboutmeComponent},
  { path: 'gallery', component: GallerypageComponent},


  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
