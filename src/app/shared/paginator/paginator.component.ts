import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
  @Input() numberOfPages: number = 0;
  pageOptions: number[] = [];

  currentPage = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['numberOfPages']) {
      this.updatePageOptions();
    }
  }

  private updatePageOptions(){
    this.pageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2
    ].filter(pageNumber => 
      pageNumber >=1 && pageNumber <= this.numberOfPages
    );
    console.log(this.pageOptions)
  }
}
