import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filesOuter:any=[]
  isFile:boolean=true;
  folder2File:boolean=true;
  HideFiles:boolean=true
  title = 'AbhinavAssignment';
  currentPath: string='';
  constructor(private httpClient:HttpClient){
  }
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.filesOuter = data;
    })
  }
  folderClick(){
    this.isFile=!this.isFile;
    this.HideFiles=false;
  }
  folder2Click(){
    this.HideFiles=true;
    this.folder2File=!this.folder2File;
    this.HideFiles=false;
 }
}
