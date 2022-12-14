import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atencion, Menu } from '../models/menu.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url: string = environment.url_server;

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.url}/menu`);
  }

  getAtencion(): Observable<Atencion>{
    return this.http.get<Atencion>(`${this.url}/atencion`);
  }
}
