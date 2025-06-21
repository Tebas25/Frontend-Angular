import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ComisionService } from '../../../controllers/comision.service';
import { IComisionesVentas, IConsultaComisionesVentas } from '../../../models/comision.interface';
import { take } from 'rxjs';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import {CurrencyPipe} from '@angular/common'

@Component({
  selector: 'app-comisiones',
  templateUrl: './comisiones.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DatePicker,
    FloatLabel,
    ButtonModule,
    CurrencyPipe,
  ],
})
export class ComisionesComponent implements OnInit {
  consultaForm!: FormGroup;
  comisiones!: IComisionesVentas[];
  value1: Date | undefined;

  constructor(
    private fb: FormBuilder,
    private comisionesService: ComisionService,
  ) { }

  ngOnInit(): void {
    this.construirFormulario();

  }

  construirFormulario() {
    this.consultaForm = this.fb.group({
      fechaInicio: [null, Validators.required],
      fechaFin: [null, Validators.required],
    })
  }

  consultar() {
    const dto = this.consultaForm.value
    this.comisionesService.obtenerComisiones(dto)
      .pipe(take(1))
      .subscribe({
        next: (resultado => {
          this.comisiones = resultado
        }),
        error: (error) => {
          console.error('Error fetching clients:', error);
        }
      })
  }

}
