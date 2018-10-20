import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { HowFeelingPageComponent } from './how-feeling-page/how-feeling-page.component';
import { WhatActivityPageComponent } from './what-activity-page/what-activity-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AchievementComponent } from './achievement/achievement.component';

const routes: Routes = [
  {path: 'first-view', component: FirstPageComponent},
  {path: 'how-feeling', component: HowFeelingPageComponent},
  {path: 'what-activity', component: WhatActivityPageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'achievement', component: AchievementComponent},
  {path: '', redirectTo: '/first-view', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
