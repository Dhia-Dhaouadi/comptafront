import { Component, OnInit } from "@angular/core";
import { DevisModel } from "../model.model";
import { ServiceService } from "src/app/services/service.service";
import Swal from "sweetalert2";
import { formatDate } from "@angular/common";
@Component({
    selector: "app-devis",
    templateUrl: "./devis.component.html",
    styleUrls: ["./devis.component.scss"],
})
export class DevisComponent implements OnInit {
    devis = new DevisModel();
    response: any;
    captcha: string;
    constructor(private service: ServiceService) {
        this.captcha = '';
    }

    ngOnInit(): void {
        this.devis.DateAjout = formatDate(
            new Date(),
            "MMM d, y, h:mm:ss a",
            "en"
        );
    }
    AddDevis() {
        const emailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (
            this.devis.EntrepriseType == undefined ||
            this.devis.Activite == undefined  ||
            this.devis.Effectifsalarier == undefined  ||
            this.devis.Nom == undefined  ||
            this.devis.Prenom == undefined  ||
            this.devis.Telephone == undefined  ||
            this.devis.Email == undefined
        ) {
            Swal.fire({
                title: "Tous les champs sont obligatoires !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        }
        else if (!emailvalid.test(this.devis.Email) ) {
            Swal.fire({
                title: "Entrez un Email Valid",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        }
        else if (this.captcha=='') {
            Swal.fire({
                title: "Vous n'avez pas verifié que vous n'êtes pas un robot !",
                text: "",
                showConfirmButton: false,
                timer: 3000,
                icon: "error",
            });
        }
        else {
            this.service.AddDevis(this.devis).subscribe((res) => {
                this.response = res;
                if (this.response.message == "Devis created succefully") {
                    Swal.fire({
                        title: "Devis Envoyé",
                        text: "",
                        showConfirmButton: false,
                        timer: 3000,
                        icon: "success",
                    });
                    this.devis.EntrepriseType = "";
                    this.devis.Activite = "";
                    this.devis.Effectifsalarier = "";
                    this.devis.Prenom = "";
                    this.devis.Nom = "";
                    this.devis.Telephone = "";
                    this.devis.Email = "";
                    this.captcha="";
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
    resolved(captchaResponse: string) {
        this.captcha = captchaResponse;
        console.log('resolved captcha with response: ' + this.captcha);
    }

}
