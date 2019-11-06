import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import L from 'leaflet';
import 'leaflet-mouse-position';
import '@geoman-io/leaflet-geoman-free';

import { Constants } from './../../core/util/constants';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  @ViewChild("map", { static: false })
  public mapElement: ElementRef;

  public map: any;
  public urlTemplate = Constants.URL_TEMPLATE;
  public options = Constants.OPTIONS;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.map = L.map(this.mapElement.nativeElement, {
      center: [48.225897, 11.674274],
      zoom: 14,
      zoomControl: true
    });
    L.tileLayer(this.urlTemplate, this.options).addTo(this.map);
    
    this.toolbar();
  }

  private toolbar() {
    this.map.pm.addControls({
      position: 'topleft',
      drawCircleMarker: false,
    });

    this.map.pm.setLang('pt_br');
    this.mousePosition();
  }

  public mousePosition() {
    L.control.mousePosition({ prefix: "<b>LATLGN</b>" }).addTo(this.map);
  }
}
