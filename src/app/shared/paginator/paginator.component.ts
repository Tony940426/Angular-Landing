import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  numberOfPages = 5; //Make sure we receive this value from the parent
  currentPage = 2;

  pageOptions: number[] = [];

  constructor(){
    this.pageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2
    ].filter(pageNumber => 
      pageNumber >=1 && pageNumber <= this.numberOfPages
    );
  }

}
