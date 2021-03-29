import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <div *ngIf="loading">
      <div class="spinner">
      </div>
      <div id="backlight"></div>
    </div>
  `,
  styles: [`
    .spinner {
      z-index: 1054 !important;
      position: fixed;
      top: 50%;
      left: 50%;
      border: 5px solid #f3f3f3; /* Light grey */
      border-top: 5px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 0.5s linear infinite; 
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    #backlight{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height:100%;
      z-index: 1050 !important;
      background-color: rgba(0, 0, 0, 0.4);
    }
   `
  ]
})
export class SpinnerComponent implements OnInit {
  @Input('loading') loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
