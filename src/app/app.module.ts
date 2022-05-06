import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DaCompletareComponent } from './pages/da-completare/da-completare.component';
import { CompletatiComponent } from './pages/completati/completati.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: DaCompletareComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompletatiComponent,
    DaCompletareComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
