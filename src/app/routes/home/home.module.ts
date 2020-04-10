import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../../components/material/components.module';
const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ComponentsModule,
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }