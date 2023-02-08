import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {

  @Input() HasHeader: boolean = false;
  @Input() HasFooter: boolean = false;
  @Input() notes: string;
  @Input() createdAt: string;
  @Input() updatedAt: string;
  @Input() status: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}

}