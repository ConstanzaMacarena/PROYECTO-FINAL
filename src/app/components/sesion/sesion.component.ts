import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,ReactiveFormsModule} from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'sesion',
  templateUrl: './sesion.component.html',
})
export class Sesion {
  myForm: FormGroup = new FormGroup({
    nombre: new FormControl(""),
    clave: new FormControl(""),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: '',
      clave: '',
    });
  }

  async onSubmit(form: FormGroup) {
    try {
      const login = { nombre : form.controls.nombre.value , clave : form.controls.clave.value };

      const axiosResponse = await axios.post("http://192.168.0.8:5000/api/v1/palabras", login);

      alert(axiosResponse.data.data);
    } catch (error) {
			alert("Algo salió mal");
    }
  }
}