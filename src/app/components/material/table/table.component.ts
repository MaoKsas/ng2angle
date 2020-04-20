import {Component, ViewChild, TemplateRef, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

// import {DataSource} from '@angular/cdk/collections';
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

  private dataSource;
  private displayedColumns;

  @Input() columns: any= {};
  @Input() dataIn: any = [];
  constructor(){}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.displayedColumns = this.columns.map(c => c.name);
    this.dataSource = new MatTableDataSource(this.dataIn);
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
