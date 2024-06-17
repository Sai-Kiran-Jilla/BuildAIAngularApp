import { Component } from '@angular/core';
import { EntryService, Entry } from '../entry.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {
  entryValue = '';
  errorMessage = '';

  constructor(private entryService: EntryService) { }

  onSubmit() {
    const newEntry: Entry = { name: this.entryValue };
    this.entryService.addEntry(newEntry).subscribe(
      () => {
        this.entryValue = '';
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = error.error;
      }
    );
  }
}
