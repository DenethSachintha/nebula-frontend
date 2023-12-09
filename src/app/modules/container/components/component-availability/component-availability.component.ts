import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-component-availability',
  templateUrl: './component-availability.component.html',
  styleUrls: ['./component-availability.component.scss']
})
export class ComponentAvailabilityComponent implements OnInit{
  currentComponentID: string = "";
  componentData: any;
  storeList: string = '';
  stores: any[] = [];
  storeData:any;
  st0:string='';
  constructor(
    private http: HttpClient,
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
  ) {}
  ngOnInit() {
    this._Activatedroute.params.subscribe(params => {
      this.currentComponentID = params['_id'];
    });
    this.getCurrentComponent();
  }
  getCurrentComponent() {
    this.http
      .get<any>(`http://localhost:8080/api/v1/component/search/${this.currentComponentID}`)
      .subscribe(
        (resultData: any) => {
          this.componentData = resultData;
          // Now that you have componentData, you can get the storeList and load stores.
          this.storeList = this.componentData.componentStores;
          console.log(this.storeList[0]);
          //you can this.storeList[0] has all shop numbers.
          const storeString = this.storeList[0];
          const storeArray: string[] = storeString.split(',');


          this.getStoresByComponentStores();
          //this.st0=this.storeList[0];
          this.getStoreByNumber(storeArray[0]);
        },
        (error) => {
          console.error('Error fetching component data:', error);
          this._router.navigate(['not-found-page']);
        }
      );
  }
  //load stores
  getStoresByComponentStores() {
    const url = `http://localhost:8080/api/v1/store/searchByNumbers?numbers=${this.storeList}`;

    this.http.get(url).subscribe(
      (response: any) => {
        this.stores = response;
      },
      (error) => {
        console.error('Error loading stores:', error);
      }
    );
  }
  getStoreByNumber(stNumber: any) {
    const Url = `http://localhost:8080/api/v1/store/searchByNumber?number=${stNumber}`;
    // Use string interpolation
    this.http.get<any>(Url).subscribe((Results) => {
      this.storeData = Results;
      console.log(this.storeData);
    });
  }
  //search
  searchResults: any[] = [];
  searchTerm: string = '';


  searchComponentByName(): void {
    if (this.searchTerm.trim() === '') {
      // Handle empty search term if needed
      return;
    }

    const url = `http://localhost:8080/api/v1/component/searchByName?name=${this.searchTerm}`;

    this.http.get<any[]>(url).subscribe((results) => {
      this.searchResults = results;
      console.log(this.searchResults);
    });
  }

}
