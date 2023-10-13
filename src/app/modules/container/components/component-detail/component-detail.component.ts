import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.scss']
})
export class ComponentDetailComponent implements OnInit{
  currentComponentID: string="";
  componentData: any;
  constructor(private http: HttpClient,private _Activatedroute:ActivatedRoute, private _router: Router,) {}
  ngOnInit() {
    this._Activatedroute.params.subscribe(params => {
    this.currentComponentID = params['_id'];
});
    this.getCurrentComponent();
  }
  getCurrentComponent() {
    this.http
      .get<any>(`http://localhost:8081/api/v1/component/search/${this.currentComponentID}`)
      .subscribe(
        (resultData: any) => {
          this.componentData = resultData; // Store the API response data in a variable.
          console.log(resultData);
          //console.log(this.componentData);

        },
        (error) => {

          console.error('Error fetching component data:', error);
          this._router.navigate(['not-found-page']);
        }
      );
  }

  //search
  searchResults: any[] = [];
  searchTerm: string = '';
  searchComponentByName(): void {
    if (this.searchTerm.trim() === '') {
      // Handle empty search term
      return;
    }

    const url = `http://localhost:8081/api/v1/component/searchByName?name=${this.searchTerm}`;

    this.http.get<any[]>(url).subscribe((results) => {
      this.searchResults = results;
      console.log(this.searchResults);
    });
  }




}









