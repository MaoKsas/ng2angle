import { Component, OnInit } from '@angular/core';
import { IpcRenderer } from 'electron';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private publicadores_activos = 158;
    private ipc: IpcRenderer
    constructor() {
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
