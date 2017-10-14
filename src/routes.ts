import { Routes } from "@angular/router"
import { ActivityListComponent } from "./app/activity-list/activity-list.component"
import { MapComponent } from "./app/map/map.component"

export const appRoutes: Routes = [
  { path: "drive", component: ActivityListComponent },
  { path: "drive/:id", component: MapComponent },
  { path: "", redirectTo: "/drive", pathMatch: 'full' }
]
