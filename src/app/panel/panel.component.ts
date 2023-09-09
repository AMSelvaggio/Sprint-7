import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PresupuestoService } from '../service/presupuesto.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  @Output() totalChanged = new EventEmitter<number>();

  form: FormGroup;

  private subscription!: Subscription;

  // Inyecta el servicio en el constructor.
  constructor(private presupuestoService: PresupuestoService) {
    this.form = new FormGroup({
      paginas: new FormControl(0, [Validators.required, Validators.min(1)]),
      idiomas: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit(): void {
    this.subscription = this.form.valueChanges.subscribe(() => {
      this.calcular();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  calcular(): void {
    const total = this.presupuestoService.calcularPresupuesto(
      this.form.value.paginas, 
      this.form.value.idiomas
    );
    this.totalChanged.emit(total);
  }

  increment(controlName: string): void {
    const currentVal = this.form.get(controlName)?.value || 0;
    this.form.get(controlName)?.setValue(currentVal + 1);
  }
  
  decrement(controlName: string): void {
    const currentVal = this.form.get(controlName)?.value || 0;
    if (currentVal > 0) {
      this.form.get(controlName)?.setValue(currentVal - 1);
    }
  }
}
