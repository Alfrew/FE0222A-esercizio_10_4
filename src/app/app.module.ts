import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home.page';
import { ActivePostPage } from './pages/active-post.page';
import { InactivePostPage } from './pages/inactive-post.page';
import { NavbarComponent } from './components/navbar.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'activePost',
    component: ActivePostPage,
  },
  {
    path: 'inactivePost',
    component: InactivePostPage,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ActivePostPage,
    InactivePostPage,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
