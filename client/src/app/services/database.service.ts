import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneBookRecord } from './../../../../server/src/models/phone-book-record.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private url:string = "http://localhost:3000/records"
  constructor(private http: HttpClient) { }
  getRecords(){
    return this.http.get(this.url);
  }

  getRecordById(id: string){
    return this.http.get(this.url+`/${id}`);
  }

  postRecord(record: PhoneBookRecord){
    return this.http.post(this.url, record);
  }

  updateRecord(record: PhoneBookRecord, id: string){
    return this.http.put(this.url+`/${id}`, record);
  }

  deleteRecord(id: string){
    return this.http.delete(this.url+`/${id}`);
  }
}
