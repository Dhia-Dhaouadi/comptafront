import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    Contact,
    DevisModel,
    Newsletter,
} from "../components/pages/model.model";
import { Observable } from "rxjs";
import { io, Socket } from 'socket.io-client';
@Injectable({
    providedIn: "root",
})
export class ServiceService {
    socket: Socket;
    constructor(private http: HttpClient) {
        this.socket = io("http://localhost:3000");
    }
    AddDevis(data: DevisModel): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.post("http://141.94.245.79:3000/AddDevis", data, {
            headers: headers,
        });
    }
    AddNewsletter(data: Newsletter): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.post("http://141.94.245.79:3000/AddNewsletter", data, {
            headers: headers,
        });
    }
    AddContact(data: Contact): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.post("http://141.94.245.79:3000/AddContact", data, {
            headers: headers,
        });
    }
    sendMessage(data) {
        this.socket.emit("message", data);
        console.log(data)
    }
    receivedReply() {
        const observable = new Observable<any>((observer) => {
            this.socket.on("reply", (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}
