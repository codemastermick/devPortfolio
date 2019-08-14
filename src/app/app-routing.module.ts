import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { paths } from "./app-paths";

const routes: Routes = [
  {
    path: paths.home,
    loadChildren: "../app/pages/home/home.module#HomeModule"
  },
  {
    path: paths.about,
    loadChildren: "../app/pages/about/about.module#AboutModule"
  },
  {
    path: paths.contact,
    loadChildren: "../app/pages/contact/contact.module#ContactModule"
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }, // Fallback to home if no route is found

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
