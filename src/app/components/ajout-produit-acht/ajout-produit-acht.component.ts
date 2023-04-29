import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitAchetable } from 'src/app/models/produit-achetable';
import { ProduitAchetableService } from 'src/app/services/produit-achetable.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-produit-acht',
  templateUrl: './ajout-produit-acht.component.html',
  styleUrls: ['./ajout-produit-acht.component.css']
})
export class AjoutProduitAchtComponent {

  constructor(private ar:ActivatedRoute, private router:Router, private service:ProduitAchetableService){}
  save(f:NgForm){
    let produitAcht:ProduitAchetable=f.value;
    console.log(f.value);
    console.log(produitAcht);
    this.service.addProdAcht(produitAcht).subscribe(()=>{this.router.navigate(['/produit'])
    Swal.fire({
      icon: 'success',
      title: 'Produit Achetable ajouté avec succé',
      showConfirmButton: false,
      timer: 1500
    });
  })
  }

  ngOnInit(): void {
      
  }
}

