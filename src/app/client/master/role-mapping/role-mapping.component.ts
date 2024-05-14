import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CryptoService } from 'src/app/shared/crypto.service';
import { GenericApiService } from 'src/app/shared/generic-api.service';
import { environment } from 'src/environment/env';
@Component({
  selector: 'app-role-mapping',
  templateUrl: './role-mapping.component.html',
  styleUrls: ['./role-mapping.component.css']
})
export class RoleMappingComponent implements OnInit {
  public clientDetailform!:FormGroup
constructor(private _cryptoService:CryptoService,private _genericApiService:GenericApiService,private fb:FormBuilder)
{

}
ngOnInit(): void {
  this.clientDetailform = this.fb.group({
    "emp_f_name": ["", Validators.required],
      "emp_m_name": ["", [Validators.required]],
      "emp_email": ["", Validators.required,Validators.email],
      "emp_userName": ["", Validators.required],
      "password": [""],
      "emp_number": ["",],
      "emp_designation": ['', Validators.required]
  })
  
}
onClickaddEmp(action:string){
 const body = {
    "emp_f_name": 'test', 
    "emp_m_name": 'test', 
    "emp_email": 'test', 
    "emp_userName": 'test',
   "password": 'test', 
    "emp_number": 'test', 
   "emp_designation": 'test',  
  }
  const payload = this._cryptoService.encryptData(JSON.stringify(body))
  const encryptedData = {payload}
  this._genericApiService.fetchData(environment.CLIENT_ENDPOINT + action,encryptedData).subscribe(data => {
   var result = this._cryptoService.decryptData(data);
   console.log(result)
  });
  
}
}
