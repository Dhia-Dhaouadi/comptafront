import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ChatForm } from "../components/pages/model.model";

export class Message {
    constructor(public author: string, public content: string) {}
}

@Injectable({
    providedIn: "root",
})
export class Chatservice {
    constructor(private http: HttpClient) {}
    conversation = new Subject<Message[]>();
    messageMap = {
        default: "Bonjour, Merci de remplir ce formulaire pour vous aider.",
        "Formulaire Envoyé":"Votre données sont bien envoyées, nous vous contacterons dans les brefs delais."
    };
    getBotAnswer(msg: any) {
        const userMessage = new Message("", msg);
        this.conversation.next([userMessage]);
        const botMessage = new Message("LEACONSEIL", this.getBotMessage(msg));
        setTimeout(() => {
            this.conversation.next([botMessage]);
        }, 1500);
    }
    getBotMessage(question: string) {
        let answer = this.messageMap[question];
        return answer || this.messageMap["default"];
    }
    ChatForm(data: ChatForm): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.post("http://141.94.245.79:3000/AddFormChat", data, {
            headers: headers,
        });
    }
}
