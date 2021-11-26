import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'ofertas',
  templateUrl: './ofertas.component.html',
})
export class Ofertas implements OnInit {
	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.myForm = this.fb.group({
			cargo: '',
			tipo: '',
		});

    this.cargarLista();
	}

	myForm: FormGroup = new FormGroup({
		cargo: new FormControl(""),
		tipo: new FormControl(""),
	});
  
  lista: any[] = [];

	async onSubmit(form: FormGroup) {
		try {
			const nuevo_cargo = {
        cargo: this.myForm.controls.cargo.value,
        tipo: this.myForm.controls.tipo.value,
        // tema: this.myForm.controls.tema.value,
      };

			const axiosResponse = await axios.post("http://192.168.0.8:5000/api/v1/verbos", nuevo_cargo);

      if (axiosResponse.data.success){
        alert("Registro agregado exitosamente");

        this.cargarLista();
      }
      else {
        alert("Algo falló");
      }
		} catch (error) {
			alert("Algo salió mal");
		}
	}

  async cargarLista(){
    try {
      const axiosResponse = await axios.get("http://192.168.0.8:5000/api/v1/verbos");
      
      this.lista = axiosResponse.data.data;
    } catch (error) {
      alert("Algo salió mal");
    }
  }
}