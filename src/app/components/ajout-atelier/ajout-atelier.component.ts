import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atelier } from 'src/app/models/atelier';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-ajout-atelier',
  templateUrl: './ajout-atelier.component.html',
  styleUrls: ['./ajout-atelier.component.css']
})
export class AjoutAtelierComponent {
  constructor(private ar:ActivatedRoute, private router:Router, private service:AtelierService){}
  save(f:NgForm){
    let Atelier:Atelier=f.value;
    console.log(f.value);
    console.log(Atelier);
    this.service.addAtelier(Atelier).subscribe(()=>{this.router.navigate(['/produit'])})
  }

  ngOnInit(): void {
    
  }
}
