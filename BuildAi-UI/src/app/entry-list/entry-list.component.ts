import { Component, OnInit } from '@angular/core';
import { EntryService, Entry } from '../entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getEntries().subscribe(entries => {
      this.entries = entries;
      console.log("Received entries:", entries);
    });
  }

  onSelect(entry: Entry) {
    console.log('Selected entry:', entry);
  }
}
