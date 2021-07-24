import { Injectable } from '@angular/core';
/* Http and Header */
import { HttpClient, HttpHeaders } from '@angular/common/http';
// ustils
import { UtilsService } from '../../services/utils.service';
// rxjs
import {shareReplay } from 'rxjs/operators'
import {catchError } from 'rxjs/operators'
import {Observable,throwError } from 'rxjs'
import { map } from 'rxjs/operators';


/* map and Promise */



@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl= new UtilsService().baseUrl
  constructor(private http: HttpClient, public utils:UtilsService) { }


  roleList(){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Menu/GetAll?pageIndex=0&pageSize=10').subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }

  createGetMenu(){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Menu/Create').subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }
  getMenu(id:string){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Menu/GetByRoleId?roleId=' + id).subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }
  deleteMenu(data:any){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Menu/UpdateRecordState',data).subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }

  create(menuInfo:any){
  
    
   

    const header= new HttpHeaders({'Content-Type': 'application/json'})
     const headers = new HttpHeaders()
                 .set('Content-Type', 'application/json');
    
  //                return new Promise((resolve) => {
  //   this.http.post(this.baseUrl + 'Role/Create',  roleInfo).pipe(map(data => {})).subscribe(result => {
  //     console.log(result);

      
  //   });
  // })

 

  return new Promise((resolve,reject) => {
    const headers = new HttpHeaders()
                 .set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'Menu/Create',menuInfo,  { headers: header }).subscribe(data => {
      alert('success api')
      resolve(data);
    }, error => {
      alert('error api')
      
      reject(error);
   })

  })

    // const header= new HttpHeaders({'Content-Type': 'application/json'})
    //  const headers = new HttpHeaders()
    //              .set('Content-Type', 'application/json');
    
    // return this.http.post(this.baseUrl + 'Role/Create',  roleInfo,{headers}).pipe(shareReplay())
    
    //   }
}

}