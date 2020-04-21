import { Component, OnInit } from '@angular/core';
import { IpcRenderer } from 'electron'; // verificar si esta linea esta bien ubicada en la aplicacion

import {PublisherService} from '../../../services/publishers/publishers.services';
import {IPublisher} from '../../../interfaces/table.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    private publishers: IPublisher[]= [];
    public  columns = [
      { name: 'id', title: 'Id.',    cell: (element: any) => `${element.id}` },
      { name: 'group',   title: 'Group', cell: (element: any) => `${element.group}`   },
      { name: 'name',     title: 'Name',   cell: (element: any) => `${element.name}`     },
      { name: 'actions',   title: 'Action', cell: (element: any) => {} },
    ];

    private publicadores_activos = 158;
    private ipc: IpcRenderer
    constructor(private publisherData: PublisherService) {
      this.publishers = publisherData.getpublisher();

        if ((<any>window).require) {
            try {
              this.ipc = (<any>window).require('electron').ipcRenderer;
            } catch (e) {
              throw e;
            }
          } else {
            console.warn('App not running inside Electron!');
          }
     }

    ngOnInit() {
    }
    openModal(){
        console.log("Open a modal");
        this.ipc.send("openModal");
      }

}
