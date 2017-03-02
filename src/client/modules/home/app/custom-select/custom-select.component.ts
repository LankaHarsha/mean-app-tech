import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import './custom-select.scss';

@Component({
  selector: 'custom-select',
  templateUrl: './partials/custom-select.component.html',
  inputs: ['data', 'label']
})
export class CustomSelect {

	@Output()
	notify: EventEmitter<any>;
    private data: any;
    private label: any;

	constructor() {
		this.notify = new EventEmitter();
		console.log('Instance Created');
	}

	ngOnInit() {

	}

	onCustomChange(obj:any) {
		console.log('Event Raised');
		console.log(obj);
        obj ? this.notify.emit(JSON.parse(obj)) : this.notify.emit('');
	}
}