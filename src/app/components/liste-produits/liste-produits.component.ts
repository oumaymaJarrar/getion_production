import { Component, OnInit } from '@angular/core';
import { ProduitConstructibles } from "../../models/produit-constructibles";
import { ActivatedRoute, Route, Router } from '@angular/router';
import {ProduitConstructiblesService} from '../../services/produit-constructibles.service';
import Swal from 'sweetalert2';
import { ProduitAchetableService } from '../../services/produit-achetable.service';
import { ProduitAchetable } from 'src/app/models/produit-achetable';
import { Machine } from 'src/app/models/machine';
import { MachineService } from 'src/app/services/machine.service';
@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit{
  public tabProduits:ProduitConstructibles[] = [];
  public tabProduitAchtable:ProduitAchetable[] = [];
  public machines:Machine[] = [];

  constructor(private ar:ActivatedRoute, private router:Router, private service:ProduitConstructiblesService ,private serviceProdAchtab:ProduitAchetableService, private serviceMachine:MachineService){}
  
   ngOnInit(): void {
    this.ar.paramMap.subscribe(params=>{
      this.service.getAllProdconst().subscribe(data=>{this.tabProduits=data;
        for (let i = 0; i < this.tabProduits.length; i++) {
          this.service.getMachineFromProduitC(this.tabProduits[i].id).subscribe(data2 => {
            this.machines.push(data2);
            console.log(data2)
          });
        }
    })
    });
    this.ar.paramMap.subscribe(params=>{
      this.serviceProdAchtab.getAllProdAcht().subscribe(data=>{this.tabProduitAchtable=data;

    })
    });
   }
   deleteByIdFromList(prod:ProduitConstructibles){
    this.ar.paramMap.subscribe(params=>{
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe ',
            'error'
          )
        }
      })
      this.service.DeleteById(prod.id).subscribe(()=>this.tabProduits.splice(this.tabProduits.indexOf(prod),1))    
  })
}

  deleteProdAchtableById(prodAch:ProduitAchetable){
    this.ar.paramMap.subscribe(params=>{
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe ',
            'error'
          )
        }
      })
      this.serviceProdAchtab.DeleteById(prodAch.id).subscribe(()=>this.tabProduitAchtable.splice(this.tabProduitAchtable.indexOf(prodAch),1))    
  })

  }

  
}
