
// Imports for loading & configuring the in-memory web api
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WebReference{

	private url = '//localhost:3017/Bussines_Layer/LoadBranch';

	constructor(private http: Http){}

  LoadBranch(){
		return this.http.get(this.url).map(res => res.json());
	}
}
