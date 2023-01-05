import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit {


  constructor(public secondproject:FirstService) { }


  ngOnInit(): void {
  }

  getData(){
    this.secondproject.getIntegration().subscribe({
      next : (data:any)=>{
        console.log(data)
      }
    })
  }

}
