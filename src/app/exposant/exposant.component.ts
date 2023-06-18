import { ExposantService } from './../services/exposant.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exposant',
  templateUrl: './exposant.component.html',
  styleUrls: ['./exposant.component.css'],
})
export class ExposantComponent {
  constructor(
    private exposantService: ExposantService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  createExposant(exposantform: any) {
    let nomEcole = exposantform.value.nomEcole;
    let idExposant = exposantform.value.idExposant;
    let addresse = exposantform.value.addresse;
    let tel = exposantform.value.tel;
    let email = exposantform.value.email;
    let stand_cells = exposantform.value.stand_cells;
    let nombreKakemono = exposantform.value.nombreKakemono;

    let post = {
      nomEcole: nomEcole,
      idExposant: idExposant,
      addresse: addresse,
      tel: tel,
      email: email,
      stand_cells: stand_cells,
      nombreKakemono: nombreKakemono,
    };

    this.exposantService.addPost(post).subscribe((data) => {
      alert('Exposant ajouter avec Succes');
      console.log(data);
    });
  }
}
