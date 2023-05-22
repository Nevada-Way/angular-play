import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ytb-iframe',
  templateUrl: './ytb-iframe.component.html',
  styleUrls: ['./ytb-iframe.component.scss'],
})
export class YtbIframeComponent {
  //iFrameUrl!: SafeResourceUrl;
  // iFrameUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //   'https://www.youtube.com/embed/Vw6utYElVFg'
  // );
  iFrameUrl!: SafeResourceUrl;
  urlTextInput: string = '';
  isDisplayIFrame = true;

  constructor(private sanitizer: DomSanitizer) {}

  onOpenIFrame(): void {
    const ytbUrl = this.convertUrlFromWatchToEmbed(this.urlTextInput);

    this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(ytbUrl);
    //'https://www.youtube.com/embed/Vw6utYElVFg'
    this.isDisplayIFrame = true;
  }

  onUrlInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.urlTextInput = target.value;
    console.log('The original url is : ' + this.urlTextInput);
  }

  convertUrlFromWatchToEmbed(originalUrl: string): string {
    const watchPathUrl = 'watch?v=';
    const embedPathUrl = 'embed/';
    var convertedUrl: string = originalUrl;

    const indexOfWatchUrl = originalUrl.indexOf(watchPathUrl);
    console.log('indexOfWatchUrl = ' + indexOfWatchUrl);

    if (indexOfWatchUrl !== -1) {
      //If the user input was from a 'watch' url then convert the url to an embed url.

      convertedUrl =
        originalUrl.slice(0, indexOfWatchUrl) +
        embedPathUrl +
        originalUrl.slice(indexOfWatchUrl + watchPathUrl.length);
      //string.slice(0, index) + replacement + string.slice(index + substring.length);
      console.log('The new url is : ' + this.urlTextInput);
    }
    return convertedUrl;
  }
}
