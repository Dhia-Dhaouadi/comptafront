import { Component, OnInit } from "@angular/core";
import { Newsletter } from "../../pages/model.model";
import { ServiceService } from "src/app/services/service.service";
import Swal from "sweetalert2";
import { formatDate } from "@angular/common";
@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
    newsletter = new Newsletter();
    response: any;
    constructor(private service: ServiceService) {}

    ngOnInit(): void {
        this.newsletter.DateAjout = formatDate(
            new Date(),
            "MMM d, y, h:mm:ss a",
            "en"
        );
    }
    AddNewsletter() {
        const emailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (this.newsletter.Email == undefined) {
            Swal.fire({
                title: "Entrez un Email SVP",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else if (!emailvalid.test(this.newsletter.Email)) {
            Swal.fire({
                title: "Entrez un Email Valid",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else {
            this.service.AddNewsletter(this.newsletter).subscribe((res) => {
                this.response = res;
                if (this.response.message == "Newsletter created succefully") {
                    Swal.fire({
                        title: "Vous êtes abonné",
                        text: "",
                        showConfirmButton: false,
                        timer: 3000,
                        icon: "success",
                    });
                    this.newsletter.Email="";
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
