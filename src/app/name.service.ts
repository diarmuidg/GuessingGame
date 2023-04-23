import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Name } from './name';

@Injectable({
    providedIn: 'root'
})
export class NameService {

    constructor(private http: HttpClient) { }

    getNames(): Observable<Name[]> {
        return this.http.get<Name[]>('./assets/names.json');
    }
}
