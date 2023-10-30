import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('mySidenav') mySidenav: ElementRef
  isMenuOpen = false;
  isProfileDropdownOpen=false;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
  toggleProfileDropdown() {
    this.isProfileDropdownOpen=!this.isProfileDropdownOpen;
  }
  openNav() {
    this.renderer.setStyle(this.mySidenav.nativeElement, 'width', '250px');
    this.renderer.setStyle(document.body, 'backgroundColor', 'rgba(0,0,0,0.4)');
  }

  closeNav() {
    this.renderer.setStyle(this.mySidenav.nativeElement, 'width', '0');
    this.renderer.setStyle(document.body, 'backgroundColor', 'white');
  }
  log(){
    console.log("mmmks")
  }
}
