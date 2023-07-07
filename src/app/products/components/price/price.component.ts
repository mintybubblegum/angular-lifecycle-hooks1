import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input()
  public price:number = 0;
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('CHILD component: ngOnInit');
    
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`) );

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD component: ngOnChanges');
    console.log({changes});
    
  }
  ngOnDestroy(): void {
    console.log('CHILD component: ngOnDestroy');
    this.interval$?.unsubscribe(); //para evitar que nuestro componente se siga ejecutando y relentice nuestro projecto
  }

}
