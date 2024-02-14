import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EstimatesListComponent } from '../estimates-list/estimates-list.component';

@Component({
  selector: 'app-create-estimates',
  templateUrl: './create-estimates.component.html',
  styleUrls: ['./create-estimates.component.css']
})
export class CreateEstimatesComponent implements OnInit {
  constructor(private _dialog: MatDialog,) {

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
}
