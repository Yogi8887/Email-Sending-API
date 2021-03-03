import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  data={
    to:"",
    subject:"",
    message:""
  }
  constructor(private email:EmailService) { }

  ngOnInit(): void {
  }
  doSubmitFrom(){
    // Send Data code to Backend code
    console.log("try to submit form");
    console.log("Data",this.data);
  //   this.email.sendEmail(this.data).subscribe(
  //     Response=>{

  //     },
  //     error=>{

  //     }
      
      
  //   )
   }

}
