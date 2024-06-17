import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Entry {
  id?: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private apiUrl = 'https://builai-api.azurewebsites.net/api/items';

  private entries: Entry[] = [];
  private entriesSubject = new BehaviorSubject<Entry[]>(this.entries);
  entries$ = this.entriesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialEntries();
  }

  private loadInitialEntries() {
    this.http.get<Entry[]>(this.apiUrl).subscribe(entries => {
      this.entries = entries;
      this.entriesSubject.next(this.entries);
    });
  }

  getEntries(): Observable<Entry[]> {
    return this.entries$;
  }

  addEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.apiUrl, entry);
  }
}
