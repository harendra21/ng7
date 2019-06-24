import { Component } from "@angular/core";
import { setTheme } from "ngx-bootstrap/utils";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "seo";
  isCollapsed = true;
  constructor() {
    setTheme("bs3");
  }

  private menuItemsArray: any[] = [
    { title: "Electricity", link: "#" },
    { title: "Mobile Bill", link: "#" },
    {
      title: "Home and Kitchen",
      link: "#",
      subItems: [
        { title: "Furniture", link: "#" },
        { title: "Cookware", link: "#" }
      ]
    },
    {
      title: "Car and Bike Accessories",
      link: "#",
      subItems: [
        { title: "Tyres and Alloys", link: "#" },
        { title: "Comfort and Safety", link: "#" }
      ]
    }
  ];
  private menuConfig: any = {
    animation: "elastic",
    offset: { top: 64 },
    closeOnCLick: true
  };

  public onMenuClose() {
    console.log("menu closed");
  }
  public onMenuOpen() {
    console.log("menu Opened");
  }
  private onItemSelect(item: any) {
    console.log(item);
  }
}
