import { Component, OnInit } from '@angular/core';

export interface stats {
  stock: string;
  price: number;
  score: number;
}

const ELEMENT_DATA: stats[] = [
  {"stock": "NIFTY 50", "price": 18042.95,"score": -2.1},
  {"stock": "TATA MOTORS", "price": 385, "score": 7770.0}, 
  {"stock": "WIPRO", "price": 389, "score": 3960.0}, 
  {"stock": "TECHM", "price": 1019, "score": -4360.0}, 
  {"stock": "MARUTI", "price": 8419, "score": -5900.0},
  {"stock": "DIVISLAB", "price": 3430, "score": -9874.0},
  {"stock": "HDFCLIFE", "price": 597.9, "score": -11079.0}, 
  {"stock": "TCS", "price": 3313, "score": -17470.0},
  {"stock": "DRREDY", "price": 4241, "score": -18000.0}, 
  {"stock": "ADANIENT", "price": 3822, "score": -25740.0}, 
  {"stock": "UPL", "price": 715.1, "score": -25740.0}, 
  {"stock": "SBILIFE", "price": 1260, "score": -25740.0}, 
  {"stock": "BRITANNIA", "price": 4222.85, "score": -25740.0},
  {"stock": "HCLTECH", "price": 1036.5, "score": -25740.0}
];


@Component({
  selector: 'app-stock-stats',
  templateUrl: './stock-stats.component.html',
  styleUrls: ['./stock-stats.component.css']
})
export class StockStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [ 'stock','price', 'score'];
  dataSource = ELEMENT_DATA;

}
