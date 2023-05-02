import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-chatbot",
    templateUrl: "./chatbot.component.html",
    styleUrls: ["./chatbot.component.scss"],
})
export class ChatbotComponent implements OnInit {
    isVisible = true;
    constructor() {}

    ngOnInit(): void {}

    toggleSwitcher() {
        this.isVisible = !this.isVisible;
    }
}
