import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { merge, Observable, Subscription } from 'rxjs';

export interface DropdownPanel {
  templateRef: TemplateRef<any>;
  readonly closed: EventEmitter<string>;
}

@Directive({
  selector: '[appDropdownTriggerFor]'
})
export class DropdownDirective implements OnDestroy {
  private isDropdownOpen = false;
  private overlayRef: OverlayRef;
  private dropdownClosingActionsSub = Subscription.EMPTY;

  // tslint:disable-next-line:no-input-rename
  @Input('appDropdownTriggerFor') public dropdownPanelTriggerForElement: DropdownPanel;
  @HostListener('click') toggleDropdown(event: any): void {
    this.isDropdownOpen ? this.destroyDropdown(event) : this.openDropdown();
  }

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {}


  openDropdown(): void {
    this.isDropdownOpen = true;
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      width: this.elementRef.nativeElement.getBoundingClientRect().width,
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8
          }
        ])
    });

    const templatePortal = new TemplatePortal(
      this.dropdownPanelTriggerForElement.templateRef,
      this.viewContainerRef
    );
    this.overlayRef.attach(templatePortal);

    this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(
      (selection) => this.destroyDropdown(selection as string)
    );
  }

  private dropdownClosingActions(): Observable<MouseEvent | string | void> {
    const backdropClick$ = this.overlayRef.backdropClick();
    const detachment$ = this.overlayRef.detachments();
    const dropdownClosed = this.dropdownPanelTriggerForElement.closed;

    return merge(backdropClick$, detachment$, dropdownClosed);
  }

  private destroyDropdown(selection: string): void {
    if (selection && typeof selection === 'string') {
      (this.elementRef.nativeElement as HTMLInputElement).value = selection;
    }

    if (!this.overlayRef || !this.isDropdownOpen) {
      return;
    }

    this.dropdownClosingActionsSub.unsubscribe();
    this.isDropdownOpen = false;
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
