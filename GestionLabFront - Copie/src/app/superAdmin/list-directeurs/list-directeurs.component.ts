import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Directeur } from 'src/app/entites/directeur';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-directeurs',
  templateUrl: './list-directeurs.component.html',
  styleUrls: ['./list-directeurs.component.scss']
})
export class ListDirecteursComponent implements OnInit {

  listDirecteur:any;
  displayedColumns: string[] = ['id','cin','nomDirecteur', 'directeurDepuis','Email','actions'];
  dataSource!: MatTableDataSource<Directeur>;
 
  @ViewChild(MatPaginator)
  paginator!: MatPaginator ;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  constructor(private userServ:UsersService) { }

  ngOnInit(): void {
    this.userServ.getByGrade('directeur').subscribe(data=>
      {
        console.log(data)
        this.listDirecteur=data
        this.dataSource=new MatTableDataSource(this.listDirecteur)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
      })
  }

 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
