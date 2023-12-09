import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit{
  ngOnInit() {
    this.getAllCategory();
    this.getComponentByCategory("cg-001");
    this.getAllStores();
    this.getStoreByNumber("st-001");
  }
  constructor(private http: HttpClient ) {  }
  //load categories and relevant components
  CategoryArray : any[] = [];
  getAllCategory()
  {
    this.http.get("http://localhost:8080/api/v1/category/getall")

      .subscribe((resultData: any)=>
      {
        this.CategoryArray = resultData;
        console.log('CategoryArray:', this.CategoryArray);
      });
  }
  categoryData:any;
  ComponentArray : any[] = [];

  /*getAllComponent()
  {
    this.http.get("http://localhost:8081/api/v1/component/getall")

      .subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.ComponentArray = resultData;
      });
  }*/
  getComponentByCategory(cgNum: string) {
    const Url = `http://localhost:8080/api/v1/category/searchByNumber?number=${cgNum}`;
    // Use string interpolation
    this.http.get<any>(Url).subscribe((Results) => {
      this.categoryData = Results;
      console.log(this.categoryData);
    });

    const apiUrl = `http://localhost:8080/api/v1/component/getByCategoryNumber/${cgNum}`;
    // Use string interpolation
    this.http.get<any>(apiUrl).subscribe(
      (resultData: any) => {
        this.ComponentArray = resultData;
      },
      (error) => {
        console.error('Error fetching component data:', error);
      }
    );
  }

  //search
  componentSearchResults: any[] = [];
  categorySearchResults: any[] = [];
  storeSearchResults: any[] = [];
  searchTerm: string = '';
  selectedRadioButton: string='1';

  search(): void {
    if (this.searchTerm.trim() === '') {
      // Handle empty search term
      return;
    }

    const componentUrl = `http://localhost:8080/api/v1/component/searchByName?name=${this.searchTerm}`;
    const categoryUrl = `http://localhost:8080/api/v1/category/searchByName?name=${this.searchTerm}`;
    const storeUrl = `http://localhost:8080/api/v1/store/searchByName?name=${this.searchTerm}`;

    this.http.get<any[]>(componentUrl).subscribe((componentResults) => {
      this.componentSearchResults = componentResults;
      this.selectedRadioButton = '1';
    });
    this.http.get<any[]>(categoryUrl).subscribe((categoryResults) => {
      this.categorySearchResults = categoryResults;
      this.selectedRadioButton = '2';
    });
    this.http.get<any[]>(storeUrl).subscribe((storeResults) => {
      this.storeSearchResults = storeResults;
      this.selectedRadioButton = '3';
    });
  }

  //load stores
  StoreArray : any[] = [];
  storeData:any;
  getAllStores()
  {
    this.http.get("http://localhost:8080/api/v1/store/getall")
      .subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.StoreArray = resultData;
      });
  }

  getStoreByNumber(stNumber: any) {
    const Url = `http://localhost:8080/api/v1/store/searchByNumber?number=${stNumber}`;
    // Use string interpolation
    this.http.get<any>(Url).subscribe((Results) => {
      this.storeData = Results;
      console.log(this.storeData);
    });
  }
  //scroll  window
  scrollDown(scrollAmount: number) {
    this.scrollTo(scrollAmount);
  }

  private scrollTo(scrollAmount: number) {
    const currentPosition = window.scrollY;
    const newPosition = currentPosition + scrollAmount;
    window.scrollTo({
      top: newPosition,
      behavior: 'smooth'
    });
  }
}
