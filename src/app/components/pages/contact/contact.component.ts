import { Component, OnInit } from "@angular/core";
import { Contact } from "../model.model";
import { ServiceService } from "src/app/services/service.service";
import { formatDate } from "@angular/common";
import Swal from "sweetalert2";
@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    contact = new Contact();
    response: any;
    constructor(private service: ServiceService) {}

    ngOnInit(): void {
        this.contact.DateAjout = formatDate(
            new Date(),
            "MMM d, y, h:mm:ss a",
            "en"
        );
    }
    AddContact() {
        const emailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (
            this.contact.civilite == undefined ||
            this.contact.Prenom == undefined ||
            this.contact.Nom == undefined ||
            this.contact.Telephone == undefined ||
            this.contact.Email == undefined ||
            this.contact.Sujet == undefined ||
            this.contact.Message == undefined
        ) {
            Swal.fire({
                title: "Tous les champs sont obligatoires !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else if (!emailvalid.test(this.contact.Email)) {
            Swal.fire({
                title: "Entrez un Email Valid",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        } else {
            this.service.AddContact(this.contact).subscribe((res) => {
                this.response = res;
                if (this.response.message == "Contact created succefully") {
                    Swal.fire({
                        title: "Contact Envoyé",
                        text: "",
                        showConfirmButton: false,
                        timer: 3000,
                        icon: "success",
                    });
                    this.contact.civilite = "";
                    this.contact.Prenom = "";
                    this.contact.Nom = "";
                    this.contact.Telephone = "";
                    this.contact.Email = "";
                    this.contact.Sujet = "";
                    this.contact.Message = "";
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
