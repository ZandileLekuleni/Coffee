import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cappuccino', loadChildren: './page/cappuccino/cappuccino.module#CappuccinoPageModule' },
  { path: 'latte', loadChildren: './page/latte/latte.module#LattePageModule' },
  { path: 'espresso', loadChildren: './page/espresso/espresso.module#EspressoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
