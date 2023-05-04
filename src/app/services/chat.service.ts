import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class Message {
    constructor(public author:string, public content:string) {}
}

@Injectable({
   providedIn:'root'
})

export class Chatservice {
    constructor(){}
    conversation = new Subject<Message[]>()
    messageMap={
        "Salut":"Bonjour, Je suis LEA CONSEIL, comment je peux vous aider ?",
        "Bonjour":"Bonjour, Ravis de votre message, comment je peux vous aider ?",
        "Comment allez-vous":"Super est vous ?",
        "Comment allez-vous ?":"Super est vous ?",
        "comment vas-tu ?":"Trés bien est vous ?",
        "comment vas-tu":"Trés bien et vous ?",
        "comment ça va":"Trés bien et vous ?",
        "comment ça va ?":"Trés bien et vous ?",
        "qui êtes-vous":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui êtes-vous ?":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui es-tu":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui tu":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "tu es qui":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui es-tu ?":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "tu es qui ?":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui tu ?":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "default":"Bonjour, Je suis LEA CONSEIL, LEA CONSEIL ChatBot est encours de construction , leaconseil.com/#/lecabinet , http://leaconseil.com/#/Devis, http://leaconseil.com/#/contact"
    }
    getBotAnswer(msg:any){
        const userMessage = new Message('',msg);
        this.conversation.next([userMessage]);
        const botMessage = new Message ('LEACONSEIL',this.getBotMessage(msg));
        setTimeout(()=>{
           this.conversation.next([botMessage]);
        },1500)
    }
    getBotMessage(question:string){
        let answer = this.messageMap[question];
        return answer || this.messageMap['default'];

    }
}
