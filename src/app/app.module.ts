import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AnimalAidProjectComponent } from './animal-aid-project/animal-aid-project.component';
import { UGLAProjectComponent } from './ugla-project/ugla-project.component';
import { ContactComponent } from './contact/contact.component';
import { BoidCanvasComponent } from './boid-canvas/boid-canvas.component';
import { SwarmProjectComponent } from './swarm-project/swarm-project.component';
import { UnderConstructionBannerComponent } from './under-construction-banner/under-construction-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    AnimalAidProjectComponent,
    UGLAProjectComponent,
    ContactComponent,
    BoidCanvasComponent,
    SwarmProjectComponent,
    UnderConstructionBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
