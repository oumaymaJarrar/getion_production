import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/models/machine';
import { MachineService } from 'src/app/services/machine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-machine',
  templateUrl: './liste-machine.component.html',
  styleUrls: ['./liste-machine.component.css']
})
export class ListeMachineComponent {
  public machine:Machine[]=[];
  constructor(private ar:ActivatedRoute, private router:Router, private service:MachineService ){}
  ngOnInit(): void {
    this.ar.paramMap.subscribe(params=>{
      this.service.getAllMachine().subscribe(data=>{this.machine=data;
      })
    });

  }

  deleteMachine(m:Machine){
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
      this.service.DeleteById(m.id).subscribe(()=>this.machine.splice(this.machine.indexOf(m),1))    
  })

  }
}
