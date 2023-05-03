import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PreloaderComponent } from "./components/layouts/preloader/preloader.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { HomeOneComponent } from "./components/pages/home-one/home-one.component";
import { NavbarOneComponent } from "./components/layouts/navbar-one/navbar-one.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { BlogGridComponent } from "./components/pages/blog-grid/blog-grid.component";
import { BlogDetailsComponent } from "./components/pages/blog-details/blog-details.component";
import { PricingComponent } from "./components/pages/pricing/pricing.component";
import { TermsConditionsComponent } from "./components/pages/terms-conditions/terms-conditions.component";
import { PrivacyPolicyComponent } from "./components/pages/privacy-policy/privacy-policy.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { LogInComponent } from "./components/pages/log-in/log-in.component";
import { SignUpComponent } from "./components/pages/sign-up/sign-up.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    NgcCookieConsentConfig,
    NgcCookieConsentModule,
} from "ngx-cookieconsent";
import { DevisComponent } from "./components/pages/devis/devis.component";
import { SoustraitanceexpertcomptableComponent } from "./components/pages/soustraitanceexpertcomptable/soustraitanceexpertcomptable.component";
import { AuditComponent } from "./components/pages/audit/audit.component";
import { ExternalisationpaieComponent } from "./components/pages/externalisationpaie/externalisationpaie.component";
import { InternalisationpaieComponent } from "./components/pages/internalisationpaie/internalisationpaie.component";
import { BilonSocialeComponent } from "./components/pages/bilon-sociale/bilon-sociale.component";
import { AccompagnementSylaeComponent } from "./components/pages/accompagnement-sylae/accompagnement-sylae.component";
import { AccompagnementSIRHComponent } from "./components/pages/accompagnement-sirh/accompagnement-sirh.component";
import { ChatbotComponent } from "./components/layouts/chatbot/chatbot.component";
import { environment } from "src/environments/environment";
import { NgxCaptchaModule } from "ngx-captcha";
import { RecaptchaModule } from "ng-recaptcha";
const cookieConfig: NgcCookieConsentConfig = {
    cookie: {
        domain: "tinesoft.github.io",
    },
    position: "bottom",
    theme: "classic",
    palette: {
        popup: {
            background: "#000000",
            text: "#ffffff",
            link: "#ffffff",
        },
        button: {
            background: "#0060a1",
            text: "#ffffff",
            border: "transparent",
        },
    },
    type: "info",
    content: {
        message:
            "LEA CONSEIL utilise les cookies ,vous pouvez accepter ou continuer votre navigation sans accepter",
        dismiss: "Autoriser les cookies",
        deny: "Continuer sans accepter",
        link: "Plus de details",
        href: "http://leaconseil.com/#/privacy-policy",
        policy: "Cookie Policy",
    },
};
@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        FooterComponent,
        HomeOneComponent,
        NavbarOneComponent,
        AboutComponent,
        ContactComponent,
        BlogGridComponent,
        BlogDetailsComponent,
        PricingComponent,
        TermsConditionsComponent,
        PrivacyPolicyComponent,
        ErrorComponent,
        LogInComponent,
        SignUpComponent,
        DevisComponent,
        SoustraitanceexpertcomptableComponent,
        AuditComponent,
        ExternalisationpaieComponent,
        InternalisationpaieComponent,
        BilonSocialeComponent,
        AccompagnementSylaeComponent,
        AccompagnementSIRHComponent,
        ChatbotComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgcCookieConsentModule.forRoot(cookieConfig),
        RecaptchaModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
