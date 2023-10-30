import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  showPopup = false;
  constructor() { }

  ngOnInit(): void {
  }
 


 togglePopup(): void {
   this.showPopup = !this.showPopup;

   if (this.showPopup) {
     document.body.style.overflow = 'hidden'; // Prevent scrolling when the popup is open
   } else {
     document.body.style.overflow = ''; // Restore scrolling when the popup is closed
   }
 }

 onPopupButtonClick(): void {
   // Handle button click inside the popup
   console.log('Button Inside Popup Clicked');
 }
}
