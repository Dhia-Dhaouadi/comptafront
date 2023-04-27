import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { LogInComponent } from './components/pages/log-in/log-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DevisComponent } from './components/pages/devis/devis.component';
import { SoustraitanceexpertcomptableComponent } from './components/pages/soustraitanceexpertcomptable/soustraitanceexpertcomptable.component';
import { AuditComponent } from './components/pages/audit/audit.component';
import { ExternalisationpaieComponent } from './components/pages/externalisationpaie/externalisationpaie.component';
import { InternalisationpaieComponent } from './components/pages/internalisationpaie/internalisationpaie.component';
import { BilonSocialeComponent } from './components/pages/bilon-sociale/bilon-sociale.component';
import { AccompagnementSylaeComponent } from './components/pages/accompagnement-sylae/accompagnement-sylae.component';
import { AccompagnementSIRHComponent } from './components/pages/accompagnement-sirh/accompagnement-sirh.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'lecabinet', component: AboutComponent},
    {path: 'nosoffres', component: PricingComponent},
    {path: 'log-in', component: LogInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'actualités', component: BlogGridComponent},
    {path: 'Actualité/:id', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'Devis', component: DevisComponent},
    {path: 'SousTraitance', component: SoustraitanceexpertcomptableComponent},
    {path: 'Audit', component: AuditComponent},
    {path: 'ExternalisationPaie', component: ExternalisationpaieComponent},
    {path: 'InternalisationPaie', component: InternalisationpaieComponent},
    {path: 'BilonSocial', component: BilonSocialeComponent},
    {path: 'SYLAE', component: AccompagnementSylaeComponent},
    {path: 'SIRH', component: AccompagnementSIRHComponent},
    {path: '**', component: ErrorComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {}
