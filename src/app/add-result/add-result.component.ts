import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router, private rs: RestService) { }

  ngOnInit(): void {

  }

  getData(data: any) {
    console.warn(data);
    //  this.http.post('http://localhost:3000/Result', data).subscribe(
    //    (result)=>{
    //      console.warn("result",result)
    //    }
    //  );
    this.rs.addResult(data);


    this.router.navigate(['Result']);
  }

  logOut(){
    localStorage.removeItem("isAuth");
    this.router.navigate(['']);

  }

}
