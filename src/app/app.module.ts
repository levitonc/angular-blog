import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTittleComponent } from './components/menu-tittle/menu-tittle.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { LittleCardComponent } from './components/little-card/little-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTittleComponent,
    BigCardComponent,
    LittleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
