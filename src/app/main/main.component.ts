import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CallsService } from "../calls.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private callsService: CallsService) { }
  public sources: any;
  public firstSet: any[] = [];
  public secondSet: any[] = [];

  public postForm = new FormGroup({
    sources: new FormControl('', Validators.required),
  });

  getData(formData: FormData){
    if(formData["sources"].length > 2){
      alert("You must select only 2 sources");
    }else{
      this.callsService.getData(formData["sources"][0], formData["sources"][1]).subscribe(res => {
        console.log(res);
  
        let _array = [];

        res.forEach(obj => {
          if(obj != null && obj.hasOwnProperty("articles")){
            _array.push(obj["articles"])
          }
          
        });


        this.firstSet = _array[0];
        this.secondSet = _array[1];
      
      });
    }

  
  }

  ngOnInit() {
    
    this.callsService.getSources().subscribe(s => {
      this.sources = s["sources"];
    })
  }

}
