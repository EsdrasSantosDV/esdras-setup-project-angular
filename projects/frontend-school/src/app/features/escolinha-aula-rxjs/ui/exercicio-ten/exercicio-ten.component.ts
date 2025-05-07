import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'esdras-khan-exercicio-ten',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercicio-ten.component.html',
  styleUrl: './exercicio-ten.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercicioTenComponent implements AfterViewInit, OnDestroy {
  private fb = inject(FormBuilder);
  animal = this.fb.group({
    writeAnimal: [''],
  });

  mode: 'debounce' | 'throttle' = 'throttle';
  subscription?: Subscription;

  @ViewChild('animalInput') inputRef!: ElementRef;

  ngAfterViewInit(): void {
    this.setupFromEventListener();
  }

  setupFromEventListener() {
    if (this.subscription) this.subscription.unsubscribe();

    const inputElement = this.inputRef.nativeElement;

    const input$ = fromEvent<Event>(inputElement, 'input').pipe(
      map((event) => (event.target as HTMLInputElement).value),
    );

    const processed$ = this.mode === 'debounce' ? input$.pipe(debounceTime(1000)) : input$.pipe(throttleTime(1000));

    this.subscription = processed$.subscribe((value) => {
      console.log(this.mode, ' - ', value);
    });
  }

  toggleMode() {
    this.mode = this.mode === 'debounce' ? 'throttle' : 'debounce';
    this.setupFromEventListener();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
