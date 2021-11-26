import { Component, OnInit } from '@angular/core';
import axios from 'axios';

// interface Curso {
// 	id : number;
// 	nombre : string;
// }

@Component({
	selector: 'cursos',
	templateUrl: './cursos.component.html',
})

export class Cursos implements OnInit {
	ngOnInit(): void {
		this.listarCursos();
	}

	lista: any[] = [];

	async listarCursos() {
		try {
			const axiosResponse = await axios.get("http://192.168.0.8:5000/api/v1/palabras");

			this.lista = axiosResponse.data.data;
		} catch (error) {
			alert("Algo salió mal");
		}
	}
}
