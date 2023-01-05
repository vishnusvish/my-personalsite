import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(public project:HttpClient) { }

  getIntegration(){
    return this.project.get("https://development.rexcoders.in/api/domain/getall");
  }
}
