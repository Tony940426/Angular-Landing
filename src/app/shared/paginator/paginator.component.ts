import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
  @Input() numberOfPages: number = 0;
  @Output() pageClick: EventEmitter<number> = new EventEmitter<number>
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
  }

  onPageClick(page: number){
    this.pageClick.emit(page);
    this.currentPage = page;
    this.updatePageOptions();
  }
}
