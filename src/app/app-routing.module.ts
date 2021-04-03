import { NgModule }             from '@angular/core';

import {  RouterModule, Routes } from '@angular/router';
import {ListsComponent} from './lists/lists.component';
import {EditComponent} from './edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    component: ListsComponent
  },
 { path: 'edit', component: EditComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {}