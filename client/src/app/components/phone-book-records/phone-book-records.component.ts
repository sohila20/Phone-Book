import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-book-records',
  templateUrl: './phone-book-records.component.html',
  styleUrls: ['./phone-book-records.component.css']
})
export class PhoneBookRecordsComponent implements OnInit {

  records:any= [];
  search:string;
  filtersLoaded: Promise<boolean>;
  IsWait:boolean=true;
  constructor(private dataService: DatabaseService,  private router: Router) {
  
   }

  ngOnInit(): void {
    this.dataService.getRecords().subscribe((data)=>{
      console.log(data);
      this.records = data;
      this.filtersLoaded = Promise.resolve(true);
      this.IsWait=false;
    })
  }

  deleteRecord(id: string, index: any) {
    this.dataService.deleteRecord(id)
      .subscribe(res => {    
          this.records.splice(index,1);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
