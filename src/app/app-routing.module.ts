import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';

const routes: Routes = [
  {path: '', component: AuthentificationComponent},
  {path: 'creation', component: CreateCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
