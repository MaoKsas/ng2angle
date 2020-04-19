import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

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
  dataSource;
  constructor(private publisherData: PublisherService){
    this.publishers = publisherData.getpublisher();
    this.dataSource = new MatTableDataSource(this.publishers);
  }
  // constructor(private data: any ){
  //   this.publishers = publisherData.getpublisher();
  //   this.dataSource = new MatTableDataSource(this.publishers);
  // }

  displayedColumns : string[]=['position', 'name', 'weight', 'symbol',]; 

  columnsToDisplay: string[] = this.displayedColumns.slice();
  columns= [
    {title:"Position", name:"position"},
    {title:"Name", name:"name"},
    {title:"Weight", name:"weight"},
    {title:"Symbol", name:"symbol"},
  ];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  addColumn() {
    const randomColumn = this.displayedColumns.length;
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  onClick2(i: number, col: any){
    console.log(i);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}