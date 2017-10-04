import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ModuleService } from './shared/services/module.service';
import { ModuleComponent } from './module/module.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { TaskComponent } from './task/task.component';
import { MemberService } from './shared/services/member.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ModuleComponent,
    MemberComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ModuleService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
