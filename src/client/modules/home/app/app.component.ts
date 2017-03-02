import { Component } from '@angular/core';
import './app.component.scss';
import { AppService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './partials/app.component.html'
})
export class AppComponent {

    private _carsList: any;
    private _currentCarMList: Array<Object> = [];
    private _selectedModel: Object = {};

    constructor(private appService: AppService) {

        this.fetchCarsList();
    }

    fetchCarsList() {

        this.appService.getCarsList()
        .subscribe((res) => {
            this._carsList = res;
            console.log(this._carsList);
        })
    }

    onCarChange(carObj: Object) {

        this._currentCarMList = [];
        this._selectedModel = {};        
        if(carObj) {
            this._currentCarMList = carObj['models'];
        }
    }

    onModelChange(modelObj: Object) {
        this._selectedModel = {};
        this._selectedModel = modelObj;
    }

}