import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

const url = 'http://api.flickr.com/services/feeds/photos_public.gne?id=100143837@N03&format=json';

@inject(HttpClient)
export class Photos {

    constructor(http) {
        this.http = http;
        this.images = [];
    }

    activate() {
        return this.http.jsonp(url).then(response => {
            this.images = response.content.items;
        });
    }
}