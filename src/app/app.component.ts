import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import {
    Router,
    NavigationStart,
    NavigationCancel,
    NavigationEnd,
} from "@angular/router";
import {
    Location,
    LocationStrategy,
    PathLocationStrategy,
} from "@angular/common";
import { filter } from "rxjs/operators";
import {
    NgcCookieConsentService,
    NgcInitializationErrorEvent,
    NgcInitializingEvent,
    NgcNoCookieLawEvent,
    NgcStatusChangeEvent,
} from "ngx-cookieconsent";
import { Subscription } from "rxjs";
declare let $: any;

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    providers: [
        Location,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
    ],
})
export class AppComponent implements OnInit, OnDestroy {
    location: any;
    routerSubscription: any;
    private popupOpenSubscription!: Subscription;
    private popupCloseSubscription!: Subscription;
    private initializingSubscription!: Subscription;
    private initializedSubscription!: Subscription;
    private initializationErrorSubscription!: Subscription;
    private statusChangeSubscription!: Subscription;
    private revokeChoiceSubscription!: Subscription;
    private noCookieLawSubscription!: Subscription;
    constructor(
        private router: Router,
        private ccService: NgcCookieConsentService
    ) {}

    ngOnInit() {
        this.recallJsFuntions();
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
            () => {}
        );

        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
            () => {}
        );

        this.initializingSubscription = this.ccService.initializing$.subscribe(
            (event: NgcInitializingEvent) => {
                console.log(`initializing: ${JSON.stringify(event)}`);
            }
        );

        this.initializedSubscription = this.ccService.initialized$.subscribe(
            () => {
                console.log(`initialized: ${JSON.stringify(event)}`);
            }
        );

        this.initializationErrorSubscription =
            this.ccService.initializationError$.subscribe(
                (event: NgcInitializationErrorEvent) => {
                    console.log(
                        `initializationError: ${JSON.stringify(
                            event.error?.message
                        )}`
                    );
                }
            );

        this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
            (event: NgcStatusChangeEvent) => {}
        );

        this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
            () => {}
        );

        this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
            (event: NgcNoCookieLawEvent) => {}
        );
    }
    ngOnDestroy() {
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializingSubscription.unsubscribe();
        this.initializedSubscription.unsubscribe();
        this.initializationErrorSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
    }
    recallJsFuntions() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                $(".preloader-area").fadeIn("slow");
            }
        });
        this.routerSubscription = this.router.events
            .pipe(
                filter(
                    (event) =>
                        event instanceof NavigationEnd ||
                        event instanceof NavigationCancel
                )
            )
            .subscribe((event) => {
                $.getScript("../assets/js/main.js");
                $(".preloader-area").fadeOut("slow");
                this.location = this.router.url;
                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
    }

}
