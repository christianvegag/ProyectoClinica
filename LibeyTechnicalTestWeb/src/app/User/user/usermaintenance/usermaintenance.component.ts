import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usermaintenance',
  templateUrl: './usermaintenance.component.html',
  styleUrls: ['./usermaintenance.component.css']
})
export class UsermaintenanceComponent implements OnInit {

  // Objeto que contendrá los datos del formulario
  user = {
    documentTypeId: null,
    documentNumber: '',
    name: '',
    fathersLastName: '',
    mothersLastName: '',
    address: '',
    ubigeoCode: '',
    provincia: '',
    distrito: '',
    phone: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  Submit(userForm: any) {
    if (userForm.valid) {
      // Creamos el JSON con los datos del formulario
      const requestData = {
        documentNumber: this.user.documentNumber,
        documentTypeId: this.user.documentTypeId,
        name: this.user.name,
        fathersLastName: this.user.fathersLastName,
        mothersLastName: this.user.mothersLastName,
        address: this.user.address,
        ubigeoCode: this.user.ubigeoCode,
        provincia: this.user.provincia,
        distrito: this.user.distrito,
        phone: this.user.phone,
        email: this.user.email,
        password: this.user.password
      };

      // Configuramos los encabezados para indicar que el contenido es JSON
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      // Realizamos la solicitud POST
      this.http.post('http://localhost:5023/LibeyUser', requestData, { headers })
        .subscribe(
          response => {
            swal.fire("Success!", "User data submitted successfully!", "success");
            userForm.reset();  // Limpiar el formulario después de la solicitud exitosa
          },
          error => {
            swal.fire("Oops!", "Something went wrong!", "error");
          }
        );
    } else {
      swal.fire("Error", "Please fill in all required fields", "warning");
    }
  }
}
