import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../../interfaces/post';
interface ArticleSection {
  title: string | null;
  content: string;
}
@Component({
  selector: 'app-post-details',
  imports: [RouterLink],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails {
  private readonly dataService = inject(DataService);
  private readonly route = inject(ActivatedRoute);

  introduction!: string;
  alrticleSections!: ArticleSection[];
  post!: Post;
  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log(`Slug: ${slug}`);
    if (slug) {
      this.getPostDetails(slug);
    }
  }

  getPostDetails(slug: string) {
    let post = this.dataService.getPostBySlug(slug);
    if (post) {
      this.post = post;
      console.log(this.post);
      console.log('Contntntntnn');
      let sections = this.transformToSections(this.post.content);
      this.introduction = sections.find((item) => item.title === null)?.content || '';
      this.alrticleSections = sections.filter((item) => item.title !== null);
    }
  }

  transformToSections(text: string): ArticleSection[] {
    const parts = text.split(/(?=## )/g);
    return parts
      .map((part) => {
        const lines = part.trim().split('\n');
        const hasHeading = lines[0].startsWith('## ');
        return {
          title: hasHeading ? lines[0].replace('## ', '').trim() : null,
          content: hasHeading ? lines.slice(1).join('\n').trim() : lines.join('\n').trim(),
        };
      })
      .filter((section) => section.content !== '' || section.title !== null);
  }
}
