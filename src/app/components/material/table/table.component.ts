import {Component, ViewChild, TemplateRef, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

//data
import { PublisherService } from '../../../services/publishers/publishers.services';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableFilteringComponent {

  publishers: PeriodicElement[];
  

  // @Input() columns: any;
  // @Input() dataIn: any;
  constructor(private publisherData: PublisherService){
    this.publishers = publisherData.getpublisher();
  }
  
  columns = [
      { name: 'position', title: 'No.',    cell: (element: any) => `${element.position}` },
      { name: 'name',     title: 'Name',   cell: (element: any) => `${element.name}`     },
      { name: 'weight',   title: 'Weight', cell: (element: any) => `${element.weight}`   },
      { name: 'symbol',   title: 'Symbol',   },
      { name: 'actions',   title: 'Action', cell: (element: any) => {} },
    ];
    
    
    
    displayedColumns = this.columns.map(c => c.name);
    dataSource = new MatTableDataSource(this.publishers);

    // dataSource = new MatTableDataSource(this.dataIn);
    
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    ngOnInit() {
      this.dataSource.sort = this.sort;
  }

  onClick2(i: number, col: any){
    console.log(i);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
