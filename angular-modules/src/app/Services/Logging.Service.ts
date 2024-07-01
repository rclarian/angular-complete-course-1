import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoggingService{
    http: HttpClient = inject(HttpClient);
    dataBaseCon: string = 'https://angularhttpclient-9f74d-default-rtdb.firebaseio.com';
    collectionName: string = 'log';


    logError(data: {statusCode: number, errorMessage: string, datetime: Date}){
        this.http.post(`${this.dataBaseCon}/${this.collectionName}.json`, data)
        .subscribe();
    }

    fetcherrors(){
        this.http.get(`${this.dataBaseCon}/${this.collectionName}.json`)
        .subscribe((data) => {
            console.log(data);
        })
    }
}