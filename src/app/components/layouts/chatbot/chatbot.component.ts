import { Component, OnInit } from "@angular/core";
import { Configuration, OpenAIApi } from "openai";
import { environment } from "src/environments/environment";
import { ChatWithBot, ResponseModel, gptModels } from "../../pages/model.model";

@Component({
    selector: "app-chatbot",
    templateUrl: "./chatbot.component.html",
    styleUrls: ["./chatbot.component.scss"],
})
export class ChatbotComponent implements OnInit {
    isVisible = true;
    chatConversation: ChatWithBot[] = [];
    response!: ResponseModel | undefined;
    gptModels = gptModels;
    promptText = "";
    showSpinner = false;
    constructor() {}

    ngOnInit(): void {}

    toggleSwitcher() {
        this.isVisible = !this.isVisible;
    }
    checkResponse() {
        this.pushChatContent(this.promptText, "Client", "person");
        this.invokeGPT();
    }
    pushChatContent(content: string, person: string, cssClass: string) {
        const chatToPush: ChatWithBot = {
            person: person,
            response: content,
            cssClass: cssClass,
        };
        this.chatConversation.push(chatToPush);
    }
    getText(data: string) {
        return data.split("\n").filter((f) => f.length > 0);
    }
    async invokeGPT() {
        if (this.promptText.length < 2) return
        try {
            this.response = undefined;
            let configuration = new Configuration({
                apiKey: environment.apiKey,
            });
            let openai = new OpenAIApi(configuration);
            let requestData = {
                model: "text-davinci-003",
                prompt: this.promptText,
                temperature: 0.95,
                max_tokens: 150,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
            };
            this.showSpinner = true;
            let apiResponse = await openai.createCompletion(requestData);

            this.response = apiResponse.data as ResponseModel;
            this.pushChatContent(
                this.response.choices[0].text.trim(),
                "Mr Bot",
                "bot"
            );
            debugger;
            this.showSpinner = false;
        } catch (error: any) {
            this.showSpinner = false;
            if (error.response) {
                console.error(error.response.status, error.response.data);
            } else {
                console.error(
                    `Error with OpenAI API request: ${error.message}`
                );
            }
        }
    }
}
