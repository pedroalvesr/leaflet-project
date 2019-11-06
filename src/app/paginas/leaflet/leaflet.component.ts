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
      center: [-16.6799, -49.255],
      zoom: 10,
      zoomControl: true
    });

    L.tileLayer(this.urlTemplate, this.options).addTo(this.map);

    this.leafletPmDrawerMode();
  }

  public mousePosition() {
    L.control.mousePosition({ prefix: "<b>LATLGN</b>" }).addTo(this.map);
  }

  private leafletPmDrawerMode() {
    this.map.pm.addControls({
      position: 'topleft',
      drawCircle: false,
    });

    this.map.pm.setLang('pt_br');
    this.mousePosition();
  }

}
