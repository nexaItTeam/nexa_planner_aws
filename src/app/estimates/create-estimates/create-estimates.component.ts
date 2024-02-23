import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EstimatesListComponent } from '../estimates-list/estimates-list.component';
import { RemoveEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor, groupBy } from '@progress/kendo-data-query';
@Component({
  selector: 'app-create-estimates',
  templateUrl: './create-estimates.component.html',
  styleUrls: ['./create-estimates.component.css']
})
export class CreateEstimatesComponent implements OnInit {
  public view:any=[]
  public listdata:any=[]
  buttons: string[] = ["BasePrice",
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
    "Alfresco",
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
    "Additional",
    "Provisions",
    "SWIMMING POOL",
    "GRANNY",
    "Deductions",
    "PROJECT ADDITIONALS",
    "CABINETRY",]; // Add more buttons as needed
  filteredButtons: string[] = [];
  public groups!: GroupDescriptor[];
  constructor(private _dialog: MatDialog,) {
    this.filteredButtons = this.buttons.slice()
  }
  ngOnInit(): void {
    this.groups = [
              
      { field: "component_type" },
    ];
  }
  //open dialog on click and pass selected value ex;facade
  opendetaillist(data: string) {
    debugger
    const dialogRef = this._dialog.open(EstimatesListComponent, {
      disableClose: true,
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val)
          this.listdata.push(val)
          console.log(this.listdata)
          const uniqueObjectsMap = this.listdata.reduce((map:any, array:any) => {
            array.forEach((obj:any) => {
                const key = obj.id + obj.component_type;
                if (!map.has(key)) {
                    map.set(key, obj);
                }
            });
            return map;
        }, new Map<string, any>());
        
        // Convert the Map values (unique objects) to an array
        const mergedArray = Array.from(uniqueObjectsMap.values());
        
        
            this.view= groupBy(mergedArray, this.groups);
        }
      },
    });
  }

  filterList(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filteredButtons = this.buttons.filter(button => button.toLowerCase().includes(value.toLowerCase()));
  }
  public removeHandler(args: RemoveEvent): void {
    const indexToRemove = args.rowIndex;

    // Remove the item from the data source
    this.view.splice(indexToRemove, 1);

    // Optionally, you can close any open editing cells if needed
    args.sender.cancelCell();
  }
}
