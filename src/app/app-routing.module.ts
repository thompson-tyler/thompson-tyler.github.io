import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AnimalAidProjectComponent } from './animal-aid-project/animal-aid-project.component';
import { UGLAProjectComponent } from './ugla-project/ugla-project.component';
import { SwarmProjectComponent } from './swarm-project/swarm-project.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/animal-aid', component: AnimalAidProjectComponent },
    { path: 'projects/ugla', component: UGLAProjectComponent },
    { path: 'projects/swarm', component: SwarmProjectComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
