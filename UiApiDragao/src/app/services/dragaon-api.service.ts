import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DragonAPIResponse } from '../types/DragonAPI.response';

const resUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

@Injectable({
  providedIn: 'root'
})
export class DragonAPIService {
  private dragoesSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  listaDragoes(): Observable<any> {
    if (this.dragoesSubject.value === null) {
      this.refreshDragoes();
    }
    return this.dragoesSubject.asObservable();
  }

  refreshDragoes() {
    return this.http
      .get(resUrl)
      .pipe(
        map((data: []) => {
          return data.sort((a: DragonAPIResponse, b: DragonAPIResponse) => {
            return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
          });
        })
      )
      .subscribe(data => {
        this.dragoesSubject.next(data);
      });
  }

  deletaDragao(id: string) {
    return this.http.delete(`${resUrl}/${id}`).toPromise();
  }

  adicionaDragao(dragao: DragonAPIResponse) {
    return this.http.post(`${resUrl}`, dragao).toPromise();
  }

  editaDragao(dragao: DragonAPIResponse) {
    return this.http.put(`${resUrl}/${dragao.id}`, dragao).toPromise();
  }

  detalhesDragao(id: string) {
    return this.http.get(`${resUrl}/${id}`).toPromise();
  }
}
