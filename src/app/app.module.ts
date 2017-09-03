import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SobreComponent } from "./main/sobre/sobre.component";
import { AgendaComponent } from "./main/agenda/agenda.component";
import { QuemSomosComponent } from './main/quem-somos/quem-somos.component';
import { ContatoComponent } from './main/contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    MainComponent,
    AgendaComponent,
    QuemSomosComponent,
    ContatoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
