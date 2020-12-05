import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
const rssConverter = 'https://api.rss2json.com/v1/api.json';
import { Articles } from '../interfaces/articles';
const rssParam = 'rss_url';

@Injectable({
  providedIn: 'root',
})
export class MediumArticlesService {
  constructor(private http: HttpClient) {}

  fetchFeed(targetUrl: string) {
    const params = new HttpParams().set(rssParam, targetUrl);

    return this.http
      .get<Articles>(rssConverter, { params })
      .toPromise()
      .then((result) => this.mapResponse(result));
  }
  private mapResponse(input) {
    const feed = input.feed;
    if (feed) {
      feed.items = input.items;
    }
    return feed;
  }
}
