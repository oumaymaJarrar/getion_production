import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/models/machine';
import { ProduitConstructibles } from 'src/app/models/produit-constructibles';
import { MachineService } from 'src/app/services/machine.service';
import { ProduitConstructiblesService } from 'src/app/services/produit-constructibles.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-produiconst',
  templateUrl: './edit-produiconst.component.html',
  styleUrls: ['./edit-produiconst.component.css']
})
export class EditProduiconstComponent implements OnInit{
   p!: ProduitConstructibles;
  id:any;
  public machine:Machine[]=[];
  constructor(private ar:ActivatedRoute,private router:Router,private service:ProduitConstructiblesService,private serviceM:MachineService){}

  ngOnInit(){
    this.ar.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.id=params.get('id')
      this.service.getProduitConstById(this.id).subscribe(data=>{
        console.log("testeeeee"+data)
      this.p=data;
    })
    this.serviceM.getAllMachine().subscribe(data=>{this.machine=data;
    });
      
    });
  
  }

  updateProduit(f:NgForm) {
    let prod:ProduitConstructibles=f.value;
    let id=+Number(this.ar.snapshot.paramMap.get('id'));
    console.log(prod);
    this.service.updateProduitConst(id,prod).subscribe(() => {this.router.navigate(['/produit'])
      Swal.fire({
        icon: 'success',
        title: 'Produit modifié avec succé',
        showConfirmButton: false,
        timer: 1500
      });    });
  }
  }



