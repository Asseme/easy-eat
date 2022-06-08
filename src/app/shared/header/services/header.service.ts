import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  searchForm: FormGroup = new FormGroup({});

  constructor(private formBuider: FormBuilder, private sharedService: SharedService) { }

  searchFormBuilder(): FormGroup {
    this.searchForm = this.formBuider.group(
      {
        location: new FormControl(''),
        restaurant: new FormControl('')
      }
    )
    return this.searchForm
  } 
}
