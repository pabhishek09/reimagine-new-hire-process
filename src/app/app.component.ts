import { Component, OnInit  } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { APIEndpoints } from '../assets/endpoints.constant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.http.get(APIEndpoints.user)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
