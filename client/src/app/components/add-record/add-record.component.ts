import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { PhoneBookRecord } from '../../../../../server/src/models/phone-book-record.model';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  recordForm: FormGroup;
  constructor(private dataService: DatabaseService,private formBuilder: FormBuilder, private router: Router) { }
 
 
  ngOnInit() {
    this.recordForm = this.formBuilder.group({
      name: ['', [Validators.compose([Validators.required]), Validators.compose([Validators.minLength(3)])]],
      number: ['', [Validators.compose([Validators.required])]],
    });
  }

  get recordFormControl() {
    return this.recordForm.controls;
  }

 
  addRecord() {
    
    const phoneRecord:any = {
      name: this.recordForm.controls.name.value,
      phoneNumber: this.recordForm.controls.number.value,
    };
    this.dataService.postRecord(phoneRecord)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        });
  }

}
