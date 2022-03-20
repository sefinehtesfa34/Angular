import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() text:string |undefined;
@Input() color:string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
