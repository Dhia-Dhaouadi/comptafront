import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact, DevisModel, Newsletter } from '../components/pages/model.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  AddDevis(data: DevisModel) : Observable<any>{
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/AddDevis', data, {
      headers: headers,
    });
  }
  AddNewsletter(data: Newsletter) : Observable<any>{
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/AddNewsletter', data, {
      headers: headers,
    });
  }
  AddContact(data: Contact) : Observable<any>{
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/AddContact', data, {
      headers: headers,
    });
  }
}
