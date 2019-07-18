import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Tile {
  color: string;
  text: string;
}

export interface ChipColor {
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'Planning', color: 'lightblue' },
    { text: 'Design', color: 'lightgreen' },
    { text: 'Development', color: 'lightpink' },
    { text: 'Completed', color: '#DDBDF1' },
  ];

  availableColors: ChipColor[] = [
    {name: 'none'},
    {name: 'Primary'},
    {name: 'Accent'},
    {name: 'Warn'}
  ];
  constructor() { }

  ngOnInit() {

  }

}
