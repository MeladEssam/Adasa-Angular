import { Component, Input } from '@angular/core';
import { Post } from '../../../interfaces/post';

@Component({
  selector: 'app-selected-article',
  imports: [],
  templateUrl: './selected-article.html',
  styleUrl: './selected-article.css',
})
export class SelectedArticle {
  @Input() post!: Post;
  @Input() isInBlog: boolean = false;
}
