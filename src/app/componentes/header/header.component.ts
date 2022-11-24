import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Atencion, Menu } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public dataMenu: Menu[] = [] as Menu[];
  public dataAtencion: Atencion = {} as Atencion;
  private subscription: Subscription | undefined;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getDataMenu();
    this.getDataAtencion();
  }

  public getDataMenu(){
    this.subscription = this.menuService.getMenu().subscribe(
      response => {
        this.dataMenu = response;
      }
    );
  }

  public getDataAtencion(){
    this.subscription = this.menuService.getAtencion().subscribe(
      response => {
        this.dataAtencion = response;
      }
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
