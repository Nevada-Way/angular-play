import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-my-iframe',
  templateUrl: './my-iframe.component.html',
  styleUrls: ['./my-iframe.component.scss'],
})
export class MyIframeComponent {
  //iFrameUrl!: SafeResourceUrl;
  // iFrameUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //   'https://www.youtube.com/embed/Vw6utYElVFg'
  // );
  iFrameUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://gist.github.com/SpeedCodeNpo/d9190ce601ca72094d3316c980ba5131'
  );
  isDisplayIFrame = true;

  constructor(private sanitizer: DomSanitizer) {}

  onOpenIFrame(): void {
    this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/Vw6utYElVFg'
    );
    this.isDisplayIFrame = true;
  }
}
