import { Injectable } from '@angular/core';
import {ELEMENT_DATA} from '../muck-data';
import {IPublisher} from '../../interfaces/table.interface';

@Injectable({
    providedIn: 'root'
})

export class PublisherService{
    constructor(){}

    getpublisher(): IPublisher[]{
        return ELEMENT_DATA;;
    }
}