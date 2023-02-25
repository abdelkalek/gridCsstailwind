import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        SidebarComponent,
        NavbarComponent
    ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule { }
