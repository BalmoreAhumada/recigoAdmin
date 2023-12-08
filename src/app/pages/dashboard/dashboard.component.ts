import { CommonModule } from '@angular/common';
import {  Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './dashboard.component.html'
})
export default class DashboardComponent {


  @ViewChild('sideNav')sideNavRef!:ElementRef;

  mostrarOcultarMenu(){
    this.sideNavRef.nativeElement.classList.toggle('hidden');
    //this.sideNav?.classList.toggle('hidden');
  }
}
