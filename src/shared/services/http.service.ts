import { Injectable } from '@angular/core' ;
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

    private baseUrl: string = environment.apiBaseURL;

    constructor(private http: Http) {
    }

    get(endpoint: string) {
        const apiUrl = this.baseUrl.concat(endpoint);
        return this.http.get(apiUrl);
    }

}
