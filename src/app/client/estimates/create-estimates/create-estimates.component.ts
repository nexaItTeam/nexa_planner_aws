import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EstimatesListComponent } from '../estimates-list/estimates-list.component';
import { RemoveEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor, groupBy } from '@progress/kendo-data-query';
@Component({
  selector: 'app-create-estimates',
  templateUrl: './create-estimates.component.html',
  styleUrls: ['./create-estimates.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateEstimatesComponent implements OnInit {
  public view: any = []
  public listdata: any = []
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

      { field: "component_type", dir: 'asc' },
    ];
  }
  //open dialog on click and pass selected value ex;facade
  opendetaillist(data: string) {
if(this.view.length > 0){
var dataindex =this.view.findIndex((obj:any) => obj.value === data) //get the index of the data and pass it
}
    const dialogRef = this._dialog.open(EstimatesListComponent, {
      disableClose: true,
      data: {
       buttonName: data,
        componentdata: this.view.length == 0 ? []:  dataindex != -1 ? this.view[dataindex].items: []
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {

          if (this.listdata.length != 0) {



            this.removeElementsByComponentType(this.listdata, val[0].buttonName);
            this.listdata.push(val[1])

          } else {
            this.listdata.push(val[1])
          }

          const uniqueObjectsMap = this.listdata.reduce((map: any, array: any) => {
            array.forEach((obj: any) => {
              const key = obj.id + obj.component_type;
              if (!map.has(key)) {
                map.set(key, obj);
              }
            });
            return map;
          }, new Map<string, any>());

          // Convert the Map values (unique objects) to an array
          const mergedArray = Array.from(uniqueObjectsMap.values());


          this.view = groupBy(mergedArray, this.groups);
          this.view.sort((a: any, b: any) => a.value.localeCompare(b.value));
         
        }
        // Sort the array alphabetically based on component_type
        
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

  removeElementsByComponentType(arr: any[], componentType: string) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (Array.isArray(arr[i])) {
        this.removeElementsByComponentType(arr[i], componentType); // Recursively call the function for nested arrays
      } else {
        if (arr[i].component_type === componentType) {
          arr.splice(i, 1); // Remove the element if its component_type matches the specified componentType
        }
      }
    }
  }
}
