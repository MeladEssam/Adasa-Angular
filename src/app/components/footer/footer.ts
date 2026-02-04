import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';
import { SiteInfo } from '../../interfaces/site-info';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly dataService = inject(DataService);
  siteInfo!: SiteInfo;

  constructor() {
    this.siteInfo = this.dataService.getSiteInfo();
  }
}
