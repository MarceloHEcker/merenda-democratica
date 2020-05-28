import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component( {
  selector: 'app-merenda-bot',
  templateUrl: './merenda-bot.page.html',
  styleUrls: [ './merenda-bot.page.scss' ],
} )
export class MerendaBotPage implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    !function ( d, s, id ) {
      var js: any,
        fjs = d.getElementsByTagName( s )[ 0 ],
        p = 'https';
      js = d.createElement( s );
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore( js, fjs );
      return false;
    }
      ( document, "script", "twitter-wjs" );
  }
}
