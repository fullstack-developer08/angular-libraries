import { OnInit, Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[draggable]',
})
export class AngularDraggableDirective implements OnInit {

  clientY_top: number = 0;
  clientX_left: number = 0;
  isMouseDown: boolean = false;

  constructor(public element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style.position = "relative";
  }

  @HostListener("mousedown", ["$event"])
  onMouseDown(event: MouseEvent) {
    if (event.button === 2) return; // prevents right click drag, remove his if you don't want it
    this.isMouseDown = true;
    this.clientY_top =
      event.clientY - this.element.nativeElement.style.top.replace("px", "");
    this.clientX_left =
      event.clientX - this.element.nativeElement.style.left.replace("px", "");
  }

  @HostListener("document:mouseup")
  onMouseUp(event: MouseEvent) {
    this.isMouseDown = false;
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    if (this.isMouseDown) {
      this.element.nativeElement.style.top =
        event.clientY - this.clientY_top + "px";
      this.element.nativeElement.style.left =
        event.clientX - this.clientX_left + "px";
    }
  }

}