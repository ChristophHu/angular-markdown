import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  markdown: string = '# Markdown per variable'
  markdownPerService: string = ''
  md: string = ''

  constructor(private markdownService: MarkdownService, private httpClient: HttpClient) { }

  async ngOnInit() {
    // outputs: <p>I am using <strong>markdown</strong>.</p>
    this.markdownPerService = this.markdownService.compile('I am using __markdown__.')

    this.md = await this.httpClient.get(`/assets/readme.md`,{ responseType: 'text'}).toPromise();
  }
}
