import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import {
  AddEvent,
  GridDataResult,
  CellClickEvent,
  CellCloseEvent,
  SaveEvent,
  CancelEvent,
  GridComponent,
  RemoveEvent
} from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Keys } from '@progress/kendo-angular-common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {Product} from './models'

@Component({
  selector: 'app-estimates-list',
  templateUrl: './estimates-list.component.html',
  styleUrls: ['./estimates-list.component.css']
})
export class EstimatesListComponent implements OnInit {
  public view: any;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 5
  };

  public changes = {};

  constructor(private formBuilder: FormBuilder, private _dialogRef: MatDialogRef<EstimatesListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }
  ngOnInit(): void {
this.view=[
  {
    "ProductName":'xyz',
    "UnitPrice":2
  }
]
  }

  public onStateChange(state: State): void {
    this.gridState = state;


  }

  public cellClickHandler(args: CellClickEvent): void {
    if (!args.isEdited) {
      args.sender.editCell(args.rowIndex, args.columnIndex, this.createFormGroup(args.dataItem));
    }
  }

  public cellCloseHandler(args: CellCloseEvent): void {
    const { formGroup, dataItem } = args;

    if (!formGroup.valid) {
      // prevent closing the edited cell if there are invalid values.
      args.preventDefault();
    } else if (formGroup.dirty) {
      if (args.originalEvent && args.originalEvent.keyCode === Keys.Escape) {
        return;
      }


    }
  }

  public addHandler(args: AddEvent): void {
    args.sender.addRow(this.createFormGroup(new Product()));
}

  public cancelHandler(args: CancelEvent): void {
    args.sender.closeRow(args.rowIndex);
  }

  public saveHandler(args: SaveEvent): void {
    if (args.formGroup.valid) {
      // Save changes to the data item
      Object.assign(args.dataItem, args.formGroup.value);
      
      // Close the row
      args.sender.closeRow(args.rowIndex);
  
      // Optionally, update the data in the view
      // If you're using a custom data source, you may need to update it as well
      this.view.push(args.dataItem) // Update the view with the modified data
    }
  }

  public removeHandler(args: RemoveEvent): void {
    const indexToRemove = args.rowIndex;
  
  // Remove the item from the data source
  this.view.splice(indexToRemove, 1);

  // Update the view
  this.view = [...this.view]; // This creates a new array reference to trigger change detection

  // Optionally, you can close any open editing cells if needed
  args.sender.cancelCell();

  }

  public saveChanges(grid: GridComponent): void {
    grid.closeCell();
    grid.cancelCell();

    // this.editService.saveChanges();
  }

  public cancelChanges(grid: GridComponent): void {
    grid.cancelCell();

    //  this.editService.cancelChanges();
  }

  public createFormGroup(dataItem: any): FormGroup {
    return this.formBuilder.group({
    //  ProductID: dataItem.ProductID,
      ProductName: [dataItem.ProductName, Validators.required],
      UnitPrice:['']
    });
  }
}
