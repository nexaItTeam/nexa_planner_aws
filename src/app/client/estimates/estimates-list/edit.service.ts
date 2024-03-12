import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, zip } from 'rxjs';

import { map } from 'rxjs/operators';


const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

const itemIndex = (item: any, data: any): number => {
    for (let idx = 0; idx < data.length; idx++) {
        if (data[idx].ProductID === item.ProductID) {
            return idx;
        }
    }

    return -1;
};



@Injectable()
export class EditService extends BehaviorSubject<any[]> {
    private data: any[] = [];
    private originalData: any[] = [];
    private createdItems: any[] = [];
    private updatedItems: any[] = [];
    private deletedItems: any[] = [];

    constructor(private http: HttpClient) {
        super([]);
    }

   

    public create(item: any): void {
        this.createdItems.push(item);
        this.data.unshift(item);

        super.next(this.data);
    }

    public update(item: any): void {
        if (!this.isNew(item)) {
            const index = itemIndex(item, this.updatedItems);
            if (index !== -1) {
                this.updatedItems.splice(index, 1, item);
            } else {
                this.updatedItems.push(item);
            }
        } else {
            const index = this.createdItems.indexOf(item);
            this.createdItems.splice(index, 1, item);
        }
    }

    public remove(item: any): void {
        let index = itemIndex(item, this.data);
        this.data.splice(index, 1);

        index = itemIndex(item, this.createdItems);
        if (index >= 0) {
            this.createdItems.splice(index, 1);
        } else {
            this.deletedItems.push(item);
        }

        index = itemIndex(item, this.updatedItems);
        if (index >= 0) {
            this.updatedItems.splice(index, 1);
        }

        super.next(this.data);
    }

    public isNew(item: any): boolean {
        return !item.anyID;
    }

    public hasChanges(): boolean {
        return Boolean(this.deletedItems.length || this.updatedItems.length || this.createdItems.length);
    }

   

  

    public assignValues(target: any, source: any): void {
        Object.assign(target, source);
        
    }

    private reset() {
        this.data = [];
        this.deletedItems = [];
        this.updatedItems = [];
        this.createdItems = [];
    }

   

    private serializeModels(data?: any[]): string {
        return data ? `&models=${JSON.stringify(data)}` : '';
    }
}
