import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { PhoneBookRecordsComponent } from './components/phone-book-records/phone-book-records.component';
const routes: Routes = [
  {
    path:'',
    component:PhoneBookRecordsComponent,
  },
  {
    path: 'record/add',
    component: AddRecordComponent,
    data: { title: 'Add todo' }
  },
  {
    path: 'record/edit/:id',
    component: EditRecordComponent,
    data: { title: 'Edit todo' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
