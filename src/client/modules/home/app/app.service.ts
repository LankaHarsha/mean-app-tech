import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';  

@Injectable()
export class AppService {
	
	constructor(private http: Http) {
		
	}

	getCarsList(): Observable<void> {

        return this.http.get('api/getCarsList').map((res: Response) => {
            return res.json();
        });
    }
}