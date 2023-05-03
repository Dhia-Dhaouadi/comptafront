import { Component, OnInit } from "@angular/core";
import { ServiceService } from "src/app/services/service.service";

@Component({
    selector: "app-chatbot",
    templateUrl: "./chatbot.component.html",
    styleUrls: ["./chatbot.component.scss"],
})
export class ChatbotComponent implements OnInit {
    isVisible = true;
    messageArray = [];
    synth: any;
    voices: any;
    constructor(private socketService: ServiceService) {
        this.synth = window.speechSynthesis;
        this.voices = this.synth.getVoices();
    }
    message = "";
    ngOnInit(): void {
        this.socketService.receivedReply().subscribe((data) => {
            this.messageArray.push({
                name: "LEA CONSEIL",
                message: data.outputMessage,
            });
            this.speak(data.outputMessage);
        });
    }
    toggleSwitcher() {
        this.isVisible = !this.isVisible;
    }
    sendMessage() {
        const data = { message: this.message };
        this.socketService.sendMessage(data);
        this.messageArray.push({ name: "you", message: this.message });
        console.log(this.message)
        this.message = "";
    }
    speak(string) {
        let u = new SpeechSynthesisUtterance(string);
        u.text = string;
        u.lang = "en-US";
        u.volume = 1;
        u.rate = 1;
        u.pitch = 1;
        this.synth.speak(u);
    }
}
