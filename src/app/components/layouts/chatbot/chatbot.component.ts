import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Chatservice, Message } from "src/app/services/chat.service";
import { ChatForm } from "../../pages/model.model";
import { formatDate } from "@angular/common";
import Swal from "sweetalert2";
@Component({
    selector: "app-chatbot",
    templateUrl: "./chatbot.component.html",
    styleUrls: ["./chatbot.component.scss"],
})
export class ChatbotComponent implements OnInit {
    messages: Message[] = [];
    value: string;
    isVisible = true;
    form = new ChatForm();
    response: any;
    constructor(public chatService: Chatservice) {}
    ngOnInit(): void {
        this.chatService.conversation.subscribe((val) => {
            this.messages = this.messages.concat(val);
        });
        this.form.DateAjout = formatDate(
            new Date(),
            "MMM d, y, h:mm:ss a",
            "en"
        );
    }
    toggleSwitcher() {
        this.isVisible = !this.isVisible;
    }
    getValue(event: any) {
        this.value = event.target.value;
        console.log(this.value);
        this.sendMessage();
    }
    sendMessage() {
        this.chatService.getBotAnswer(this.value);
        this.value = "";
    }
    AddFormChat() {
        if (
            !this.form.nom ||
            !this.form.prenom ||
            !this.form.email ||
            !this.form.telephone ||
            !this.form.DateAjout ||
            !this.form.message
        ) {
            Swal.fire({
                title: "Tous les champs sont obligatoires !",
                position: "top-right",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else {
            this.chatService.ChatForm(this.form).subscribe((res) => {
                this.response = res;
                if (this.response.message == "FomrChat created succefully") {
                    this.chatService.getBotAnswer("Formulaire Envoyé");
                    this.form.nom = "";
                    this.form.prenom = "";
                    this.form.email = "";
                    this.form.telephone = "";
                    this.form.message = "";
                } else {
                    Swal.fire({
                        title: "Quelque chose ne marche pas !",
                        text: "",
                        showConfirmButton: false,
                        timer: 3000,
                        icon: "error",
                    });
                }
            });
        }
    }
}
