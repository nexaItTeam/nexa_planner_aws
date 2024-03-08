import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent {
  searchQuery: string = '';
  items: any[] = [
    { title: 'Item 1', description: 'Description of Item 1' },
    { title: 'Item 2', description: 'Description of Item 2' },
    { title: 'Another Item', description: 'Description of Another Item' }
  ]; // Sample array of items

  filteredItems: any[] = []; // Array to hold filtered items
  constructor(private router:Router) { }

  search() {
    const searchTerm = this.searchQuery.toLowerCase(); // Convert searchQuery to lowercase
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  }
  addProject(){
    this.router.navigate(['client/add-project'])
  }
  onviewProjectclick(){
    this.router.navigate(['client/project-detail'])
  }
}
