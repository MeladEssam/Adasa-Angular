import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectedArticle } from './selected-article/selected-article';
import { CategoryCard } from './category-card/category-card';
import { ArticleCard } from '../article-card/article-card';
import { DataService } from '../../services/data-service';
import { Post } from '../../interfaces/post';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SelectedArticle, CategoryCard, ArticleCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly dataService = inject(DataService);
  postsList: Post[] = [];
  categoryList: Category[] = [];
  latestPostList: Post[] = [];
  ngOnInit(): void {
    this.postsList = this.dataService.getPosts();
    this.categoryList = this.dataService.getCategories();
    this.latestPostList = this.dataService.getLatestPosts(3);
  }
}
