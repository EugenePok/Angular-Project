import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  showParagraph = false;
  logging = [];
  constructor() { }

  ngOnInit(): void {
  }

  ShowButtonDetailOnClick(){
    this.showParagraph = !this.showParagraph;
    this.logging.push('paragraph '+ (this.showParagraph ? 'showing' : 'hidden') +' on ' + new Date());  
  }



}
