import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
	selector: 'foro',
	templateUrl: './foro.component.html',
})
export class Foro implements OnInit {
	constructor(private fb: FormBuilder, private fr: FormBuilder) { }

	ngOnInit(): void {
		this.myForm = this.fb.group({
			cuerpo: '',
			tema: '',
		});

		this.formaRespuesta = this.fr.group({
			respuesta: '',
		});

		this.cargarLista();
	}

	myForm: FormGroup = new FormGroup({
		cuerpo: new FormControl(""),
		tema: new FormControl(""),
	});

	formaRespuesta: FormGroup = new FormGroup({
		respuesta: new FormControl(""),
	});

	lista: any[] = [];

	async cargarLista() {
		try {
			const axiosResponse = await axios.get("http://192.168.0.8:5000/api/v1/users");

			this.lista = axiosResponse.data.data;
		} catch (error) {
			alert("ACÁ");
			// alert("Algo salió mal");
		}
	}

	async onSubmit(form: FormGroup) {
		try {
			const nuevo_comentario = {
				cuerpo: form.controls.cuerpo.value,
				tema: form.controls.tema.value,
				usuario: "invitado",
			};

			const axiosResponse = await axios.post("http://192.168.0.8:5000/api/v1/users", nuevo_comentario);

			if (axiosResponse.data.success) {
				alert("Comentario agregado exitosamente");

				this.cargarLista();
			}
			else {
				alert("Algo falló");
			}
		} catch (error) {
			alert("Algo salió mal");
		}
	}

	async responder(form: FormGroup, id: number) {
		try {
			const nueva_respuesta = {
				respuesta: form.controls.respuesta.value,
				usuario: "invitado",
				id: id,
			};

			const axiosResponse = await axios.post("http://192.168.0.8:5000/api/v1/users", nueva_respuesta);

			if (axiosResponse.data.success) {
				alert("Respuesta agregada exitosamente");

				this.cargarLista();
			}
			else {
				alert("Algo falló");
			}
		} catch (error) {
			alert("Algo salió mal");
		}
	}

	async like(id : number){
		try {
			const nueva_respuesta = {
				esto_es_porque_si : true,
				id: id,
			};

			const axiosResponse = await axios.post("http://192.168.0.8:5000/api/v1/users", nueva_respuesta);

			if (axiosResponse.data.success) {
				this.cargarLista();
			}
			else {
				alert("Algo falló");
			}
		} catch (error) {
			alert("Algo salió mal");
		}
	}
}
