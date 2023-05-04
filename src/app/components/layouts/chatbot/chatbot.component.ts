import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Chatservice, Message } from "src/app/services/chat.service";
@Component({
    selector: "app-chatbot",
    templateUrl: "./chatbot.component.html",
    styleUrls: ["./chatbot.component.scss"],
})
export class ChatbotComponent implements OnInit {
    messages: Message[] = [];
    value: string | undefined;
    isVisible = true;
    constructor(public chatService: Chatservice) {}
    ngOnInit(): void {
        this.chatService.conversation.subscribe((val) => {
            this.messages = this.messages.concat(val);
        });
    }
    toggleSwitcher() {
        this.isVisible = !this.isVisible;
    }
    sendMessage() {
        this.chatService.getBotAnswer(this.value);
        this.value = "";
    }
}
