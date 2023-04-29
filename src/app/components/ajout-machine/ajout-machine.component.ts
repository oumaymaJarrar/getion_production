import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/models/machine';
import { MachineService } from 'src/app/services/machine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-machine',
  templateUrl: './ajout-machine.component.html',
  styleUrls: ['./ajout-machine.component.css']
})
export class AjoutMachineComponent {
  constructor(private ar:ActivatedRoute, private router:Router, private service:MachineService){}
  save(f:NgForm){
    let machine:Machine=f.value;
    console.log(f.value);
    console.log(machine);
    this.service.addMachine(machine).subscribe(()=>{this.router.navigate(['/machine'])
    Swal.fire({
      icon: 'success',
      title: 'Machine ajouté avec succé',
      showConfirmButton: false,
      timer: 1500
    });
  })
  }

  ngOnInit(): void {
    
  }
}
