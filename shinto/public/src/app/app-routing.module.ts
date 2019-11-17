import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'mine', component: MineComponent},
  {path: 'sell', component: SellComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'transaction/:id', component: TransactionComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
