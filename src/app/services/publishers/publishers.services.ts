import { Injectable } from '@angular/core';
import {ELEMENT_DATA, PUBLISHERS} from '../muck-data';
import {IPublisher} from '../../interfaces/table.interface';

@Injectable({
    providedIn: 'root'
})

export class PublisherService{
    constructor(){}

    getpublisher(): IPublisher[]{
        return PUBLISHERS;
    }
}