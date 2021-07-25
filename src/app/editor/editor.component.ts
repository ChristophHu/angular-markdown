import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {
  md: string = ''

  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    this.md = await this.httpClient.get(`/assets/readme.md`,{ responseType: 'text'}).toPromise();
  }

}
