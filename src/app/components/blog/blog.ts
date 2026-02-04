import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { DataService } from '../../services/data-service';
import { ArticleCard } from '../article-card/article-card';
import { SelectedArticle } from '../home/selected-article/selected-article';

@Component({
  selector: 'app-blog',
  imports: [ArticleCard, SelectedArticle],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  isGridView: boolean = true;

  private readonly dataService = inject(DataService);
  postsList: Post[] = [];
  categoryList!: string[];
  selctedIndex: number = 0;
  ngOnInit(): void {
    this.postsList = this.dataService.getPosts();
    this.categoryList = [];
    this.categoryList.push('جميع المقالات');
    this.dataService.getCategories().forEach((catObj) => {
      this.categoryList.push(catObj.name);
    });
  }
  filterPosts(categoryName: string): void {
    this.selctedIndex = this.categoryList.indexOf(categoryName);
    if (categoryName == 'جميع المقالات') {
      this.postsList = this.dataService.getPosts();
    } else {
      this.postsList = this.dataService.getPostsByCategory(categoryName);
    }
  }
  changeView(flag: boolean) {
    this.isGridView = flag;
  }
}
