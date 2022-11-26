import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../modelos/menu';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MenuService {

	private url: string = environment.url_server;

	constructor(private http: HttpClient) { }

	public getMenu(): Observable<Menu[]>{
		return this.http.get<Menu[]>(`${this.url}/menu`);
	}
}
