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
        "Salut":"Bonjour je suis Léa comment puis-je vous aider ?",
        "salut":"Bonjour je suis Léa comment puis-je vous aider ?",
        "Bonjour":"Bonjour je suis Léa comment puis-je vous aider ?",
        "bonjour":"Bonjour je suis Léa comment puis-je vous aider ?",
        "Comment allez-vous":"Bonjour je suis Léa comment puis-je vous aider ?",
        "Comment allez-vous ?":"Bonjour je suis Léa comment puis-je vous aider ?",
        "comment vas-tu ?":"Bonjour je suis Léa comment puis-je vous aider ?",
        "comment vas-tu":"Bonjour je suis Léa comment puis-je vous aider ?",
        "comment ça va":"Bonjour je suis Léa comment puis-je vous aider ?",
        "comment ça va ?":"Bonjour je suis Léa comment puis-je vous aider ?",
        "Quels sont vos tarifs ?":"N'hésitez pas à remplir ce formulaire https://leaconseil.com/#/Devis.",
        "Quel est votre logiciel ?":"Silae et Quadra.",
        "Quelle est la durée d'engagement ?":"Pas de durée, juste un préavis de mois à respecter.",
        "Pouvez-vous gérer la migration entre notre logiciel vers le vôtre ?":"Oui à condition de pouvoir récupérer les éléments nécessaires à cette migration.",
        "Vous proposez de l'internalisation de paie ?":"Oui avec silae.",
        "Vous proposez de l'externalisation de paie ?":"Oui.",
        "qui êtes-vous":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui êtes-vous ?":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui es-tu":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui tu":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "tu es qui":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui es-tu ?":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "tu es qui ?":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "qui tu ?":"Je suis LEA CONSEIL, cabinet de conseil en paie et RH spécialisé dans l'externalisation de la paie, leaconseil.com/#/lecabinet",
        "default":"Bonjour je suis Léa comment puis-je vous aider ?"
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
