import { Component, OnInit } from '@angular/core';
import { AggregateDescriptor, GroupDescriptor, groupBy } from '@progress/kendo-data-query';
@Component({
  selector: 'app-project-checklist',
  templateUrl: './project-checklist.component.html',
  styleUrls: ['./project-checklist.component.css']
})
export class ProjectChecklistComponent implements OnInit{
  public dataSource:any
  public data = [
    {
      "stage": "design",
      "document": "DA Approved",
      "task": "abc",
      "upload": "file1.pdf",
      "revision number": "A",
      "date": "2023-01-15",
      "last approved": "2023-01-10"
    },
    {
      "stage": "design",
      "document": "BA Approved",
      "task": "abc",
      "upload": "file2.pdf",
      "revision number": "B",
      "date": "2023-02-20",
      "last approved": "2023-02-18"
    },
    {
      "stage": "design",
      "document": "Design Drawing",
      "task": "abc",
      "upload": "file3.pdf",
      "revision number": "C",
      "date": "2023-03-25",
      "last approved": "2023-03-22"
    },
    {
      "stage": "approval",
      "document": "Approval Document 1",
      "task": "abc",
      "upload": "file4.pdf",
      "revision number": "A",
      "date": "2023-04-10",
      "last approved": "2023-04-05"
    },
    {
      "stage": "approval",
      "document": "Approval Document 2",
      "task": "abc",
      "upload": "file5.pdf",
      "revision number": "B",
      "date": "2023-05-15",
      "last approved": "2023-05-10"
    },
    {
      "stage": "construction",
      "document": "Construction Document 1",
      "task": "abc",
      "upload": "file6.pdf",
      "revision number": "A",
      "date": "2023-06-20",
      "last approved": "2023-06-15"
    },
    {
      "stage": "construction",
      "document": "Construction Document 2",
      "task": "abc",
      "upload": "file7.pdf",
      "revision number": "B",
      "date": "2023-07-25",
      "last approved": "2023-07-20"
    },
    {
      "stage": "notapplicable",
      "document": "Not Applicable Document 1",
      "task": "abc",
      "upload": "file8.pdf",
      "revision number": "A",
      "date": "2023-08-30",
      "last approved": "2023-08-25"
    },
    {
      "stage": "notapplicable",
      "document": "Not Applicable Document 2",
      "task": "abc",
      "upload": [
        {key:"file9.pdf"},
      {key:"file9.pdf"}],
      "revision number": "B",
      "date": "2023-09-10",
      "last approved": "2023-09-05"
    }
  ]
  
  public groups: any = [{ field: "stage" },
  { field: "document" },
 ];
constructor(){}
ngOnInit(): void {
  this.dataSource = groupBy(this.data, this.groups) ; 
}
isUploadArray(upload: any): boolean {
  return Array.isArray(upload);
}
groupBy(fieldName: string): void {
  // Filter data to get items belonging to the clicked group
  const clickedGroupItems = this.data.filter(item => item.stage === fieldName);
  
  // Filter data to get items not belonging to the clicked group
  const otherItems = this.data.filter(item => item.stage !== fieldName);
  
  // Combine items belonging to the clicked group and other items
  this.data = clickedGroupItems.concat(otherItems);
  this.dataSource = groupBy(this.data, this.groups) ; 
}


}
