import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { NavbarOneComponent } from './components/layouts/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from './components/layouts/navbar-two/navbar-two.component';
import { NavbarThreeComponent } from './components/layouts/navbar-three/navbar-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LogInComponent } from './components/pages/log-in/log-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import { DevisComponent } from './components/pages/devis/devis.component';
import { SoustraitanceexpertcomptableComponent } from './components/pages/soustraitanceexpertcomptable/soustraitanceexpertcomptable.component';
import { AuditComponent } from './components/pages/audit/audit.component';
import { ExternalisationpaieComponent } from './components/pages/externalisationpaie/externalisationpaie.component';
import { InternalisationpaieComponent } from './components/pages/internalisationpaie/internalisationpaie.component';
import { BilonSocialeComponent } from './components/pages/bilon-sociale/bilon-sociale.component';
import { AccompagnementSylaeComponent } from './components/pages/accompagnement-sylae/accompagnement-sylae.component';
import { AccompagnementSIRHComponent } from './components/pages/accompagnement-sirh/accompagnement-sirh.component';
const cookieConfig:NgcCookieConsentConfig = {
    "cookie": {
        "domain": "tinesoft.github.io"
      },
      "position": "bottom",
      "theme": "classic",
      "palette": {
        "popup": {
          "background": "#212121",
          "text": "#ffffff",
          "link": "#ffffff"
        },
        "button": {
          "background": "#0060A1",
          "text": "#ffffff",
          "border": "transparent"
        }
      },
      "type": "info",
      "content": {
        "message": "Ce site utilise des cookies pour vous assurer la meilleure expérience sur notre site.",
        "dismiss": "Accepter",
        "deny": "Refuser cookies",
        "link": "",
        "href": "",
        "policy": "Cookie Policy"
      }
  };
@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeOneComponent,
    NavbarOneComponent,
    NavbarTwoComponent,
    NavbarThreeComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
