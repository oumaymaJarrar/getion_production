import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/models/machine';
import { ProduitConstructibles } from 'src/app/models/produit-constructibles';
import { MachineService } from 'src/app/services/machine.service';
import { ProduitConstructiblesService } from 'src/app/services/produit-constructibles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-produitconst',
  templateUrl: './ajout-produitconst.component.html',
  styleUrls: ['./ajout-produitconst.component.css']
})
export class AjoutProduitconstComponent implements OnInit{
  public machine:Machine[]=[];
  constructor(private ar:ActivatedRoute, private router:Router, private service:ProduitConstructiblesService,private serviceM:MachineService){}
  save(f:NgForm){
    let produitc:ProduitConstructibles=f.value;
    console.log(f.value);
    console.log(produitc);
    this.service.addProdconst(produitc).subscribe(()=>{this.router.navigate(['/produit'])
    Swal.fire({
      icon: 'success',
      title: 'Produit constructible ajouté avec succé',
      showConfirmButton: false,
      timer: 1500
    });
  })
  }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(params=>{
      this.serviceM.getAllMachine().subscribe(data=>{this.machine=data;
    })
    }); 
  }
}
