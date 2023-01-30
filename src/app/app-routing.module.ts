import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoundsListComponent } from './rounds-list/rounds-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'rounds', component: RoundsListComponent },
  { path: 'users', component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
