import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Menu } from 'src/app/modelos/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

	public data: Menu[] = [] as Menu[];
	private readonly dataUnsubscribe$ = new Subject();

	constructor(
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly menuService: MenuService ) { }

	ngOnInit() {
		this.getDataMenu();
	}

	public getDataMenu(){
		this.menuService.getMenu()
		//.pipe(takeUntil(this.dataUnsubscribe$))
		.subscribe((response) => {
			this.data = response;
			console.log({'kkjhggghfhffhfhf'});
			this.changeDetectorRef.detectChanges();
		});
	}

	ngOnDestroy() {
		//this.dataUnsubscribe$.next();
		this.dataUnsubscribe$.complete();
	}

}
