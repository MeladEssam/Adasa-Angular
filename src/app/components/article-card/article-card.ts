import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
})
export class ArticleCard {
  @Input() post!: Post;
}
