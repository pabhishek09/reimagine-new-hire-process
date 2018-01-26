import { Component, OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  constructor(private http: Http) {

  }

  ngOnInit() {
    const url = environment.apiBaseURL + 'user';
    this.http.get(url)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
