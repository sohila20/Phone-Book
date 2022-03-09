import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { PhoneBookRecord } from '../../../../../server/src/models/phone-book-record.model';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  record2Form = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
  });
  id: any;

  records:any= [];
 
  constructor(private dataService: DatabaseService,private formBuilder: FormBuilder,  private activeAouter: ActivatedRoute,  private router: Router) { }
 
 
  ngOnInit() {
    this.getDetail(this.activeAouter.snapshot.params['id']);

  } 
  
  getDetail(id: string) {
    this.dataService.getRecordById(id)
      .subscribe(data => {
        this.records = data;
        this.record2Form.setValue({name:this.records.name, number:this.records.phoneNumber})
        this.id = this.records.id;
      });

  }

  editRecord() {
   const phoneRecord:any = {
     id:this.id,
      name: this.records.name,
      phoneNumber: this.records.number,
    };
    this.dataService.updateRecord(phoneRecord, phoneRecord.id)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        });
  }

}
