import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechArticleListComponent } from './tech-article-list/tech-article-list.component';



@NgModule({
  declarations: [
    TechArticleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TechArticleListComponent
  ]
})
export class TechApiModule { }
