import { Component, Input } from '@angular/core';
import { Post } from '../../../interfaces/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-selected-article',
  imports: [RouterLink],
  templateUrl: './selected-article.html',
  styleUrl: './selected-article.css',
})
export class SelectedArticle {
  @Input() post!: Post;
  @Input() isInBlog: boolean = false;
}
