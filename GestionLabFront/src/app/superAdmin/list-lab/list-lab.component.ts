import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Laboratoire } from 'src/app/entites/laboratoire';
import { LabService } from 'src/app/services/lab.service';

@Component({
  selector: 'app-list-lab',
  templateUrl: './list-lab.component.html',
  styleUrls: ['./list-lab.component.scss']
})
export class ListLabComponent implements OnInit {

  listLaboratoires:any;
  displayedColumns: string[] = ['code','nomDirecteur','denominationDuLaboratoire','acronyme', 'dateCreation','type','actions'];
  dataSource!: MatTableDataSource<Laboratoire>;
 
  @ViewChild(MatPaginator)
  paginator!: MatPaginator ;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  
  
  constructor(private labService:LabService) {  

   }

  ngOnInit(): void {

    this.labService.getAll().subscribe(
      data=>{
       
        this.listLaboratoires=data;
        this.dataSource=new MatTableDataSource(this.listLaboratoires)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )

  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      console.log(this.dataSource.paginator)
      this.dataSource.paginator.firstPage();
    }
  }

}
