import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estimates-list',
  templateUrl: './estimates-list.component.html',
  styleUrls: ['./estimates-list.component.css']
})
export class EstimatesListComponent implements OnInit {
  constructor(private _dialogRef: MatDialogRef<EstimatesListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }
  ngOnInit(): void {

  }
}
