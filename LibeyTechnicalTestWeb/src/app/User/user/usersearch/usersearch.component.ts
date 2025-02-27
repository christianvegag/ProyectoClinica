import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Asegúrate de importar HttpClient

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent {
  user: any = {};  
  documentNumber: string = '';  

  constructor(private http: HttpClient) {}

  searchUser() {
    if (this.documentNumber) {
      this.http.get(`http://localhost:5023/LibeyUser/${this.documentNumber}`).subscribe(
        (response: any) => {
          this.user = response; 
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    } else {
      console.log('Por favor ingresa un número de documento.');
    }
  }
}
