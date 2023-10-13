import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent /*implements OnInit*/{

 /* currentComponentID: string="";componentData: any;


  constructor(private http: HttpClient) {}
  ngOnInit() {
    // Initialize currentComponentID or set it based on your logic.
    this.currentComponentID = "6519dfc47e28d04f9f9d6b92";
    this.getCurrentComponent();
  }
  getCurrentComponent() {
    this.http
      .get<any>(`http://localhost:8081/api/v1/component/search/${this.currentComponentID}`)
      .subscribe(
        (resultData: any) => {
          this.componentData = resultData; // Store the API response data in a variable.
          // You can now use this.componentData in your Angular component.
          console.log(resultData.componentName);
          //console.log(this.componentData);

        },
        (error) => {
          console.error('Error fetching component data:', error);
        }
      );
  }*/

}
