import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabService } from 'src/app/services/lab.service';

@Component({
  selector: 'app-delete-labo',
  templateUrl: './delete-labo.component.html',
  styleUrls: ['./delete-labo.component.scss']
})
export class DeleteLaboComponent implements OnInit {

  laboCode:any;
  constructor(private activatedRoute:ActivatedRoute,private laboServ:LabService, private route:Router) { }

  ngOnInit(): void {
    //recuperer le code du lien 
    this.activatedRoute.params.subscribe(data=>{
      this.laboCode=data.code
    });
    this.laboServ.delete(this.laboCode).subscribe(
      data=>{
        
        this.route.navigateByUrl("admin")
      },
      err=>{
        console.log(err)
      }
    )
  }

}
