import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcerexpeduComponent } from './componentes/acerexpedu/acerexpedu.component';
import { BarrasycontacComponent } from './componentes/barrasycontac/barrasycontac.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SegundobannerComponent } from './componentes/segundobanner/segundobanner.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    AcerexpeduComponent,
    BarrasycontacComponent,
    LoginComponent,
    FooterComponent,
    SegundobannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
