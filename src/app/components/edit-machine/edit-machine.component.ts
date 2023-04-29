import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/models/machine';
import { MachineService } from 'src/app/services/machine.service';
import { ProduitConstructiblesService } from 'src/app/services/produit-constructibles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-machine',
  templateUrl: './edit-machine.component.html',
  styleUrls: ['./edit-machine.component.css']
})
export class EditMachineComponent implements OnInit{
  constructor(private ar:ActivatedRoute,private router:Router,private service:MachineService){}
  id:any;
  m!: Machine;
  ngOnInit(){
    this.ar.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.service.getMachineById(this.id).subscribe(data=>{
      this.m=data;
    })  
    });
  
  }
 
  updateMachine(f:NgForm) {
    let machine:Machine=f.value;
    let id=+Number(this.ar.snapshot.paramMap.get('id'));
    console.log(machine);
    this.service.updateMachine(id,machine).subscribe(() => {this.router.navigate(['/machine'])
      Swal.fire({
        icon: 'success',
        title: 'Machine modifié avec succé',
        showConfirmButton: false,
        timer: 1500
      });    });
  }
  
}
