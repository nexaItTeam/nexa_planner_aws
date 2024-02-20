import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EstimatesListComponent } from '../estimates-list/estimates-list.component';

@Component({
  selector: 'app-create-estimates',
  templateUrl: './create-estimates.component.html',
  styleUrls: ['./create-estimates.component.css']
})
export class CreateEstimatesComponent implements OnInit {
  buttons: string[] = ["BASEPRICE",
    "SITECOST",
    "AUTHORITYCONDITION",
    "ESTATEINCLUSION",
    "FACADE",
    "FLOOR TO CEILING HEIGHT",
    "SLAB",
    "BRICKS",
    "STAIRCASE",
    "KITCHEN",
    "KITCHEN ISLAND",
    "BUTLERS KITCHEN",
    "APPLIANCES",
    "LAUNDRY",
    "ALFRESCO",
    "MEDIA",
    "BATHROOMS",
    "VANITY",
    "ROBE",
    "WALK IN ROBES",
    "NICHE",
    "TIMBER POST",
    "RAILINGS",
    "DOORS",
    "DOORS & WINDOWS",
    "SKYLIGHT",
    "BAR",
    "BAR-2",
    "ADDITIONALS",
    "Provisions",
    "SWIMMING POOL",
    "GRANNY",
    "Deductions",
    "PROJECT ADDITIONALS",
    " CABINETRY",]; // Add more buttons as needed
  filteredButtons: string[] = [];
  constructor(private _dialog: MatDialog,) {
    this.filteredButtons = this.buttons.slice()
  }
  ngOnInit(): void {

  }
  //open dialog on click and pass selected value ex;facade
  opendetaillist(data: string) {
    const dialogRef = this._dialog.open(EstimatesListComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {

        }
      },
    });
  }

  filterList(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filteredButtons = this.buttons.filter(button => button.toLowerCase().includes(value.toLowerCase()));
  }
}
