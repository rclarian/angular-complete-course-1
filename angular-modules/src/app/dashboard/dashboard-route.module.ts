import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canActivate } from "../RouteGuards/authGuard";
import { OverviewComponent } from "./overview/overview.component";
import { StatsComponent } from "./stats/stats.component";

const routes: Routes = [
    { path: 'dashboard', canActivate: [canActivate], children: [
      {path: 'overview', component: OverviewComponent},
      {path: 'stats', component: StatsComponent}
    ] }
  ]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRouteModule{

}