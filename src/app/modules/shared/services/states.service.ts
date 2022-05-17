import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  states = [{ code: 'AL', value: 'Alabama' },
    { code: 'AK', value: 'Alaska' },
    { code: 'AZ', value: 'Arizona' },
    { code: 'AR', value: 'Arkansas' },
    { code: 'CA', value: 'California' },
    { code: 'CO', value: 'Colorado' },
    { code: 'CT', value: 'Connecticut' },
    { code: 'DC', value: 'District of Columbia' },
    { code: 'DE', value: 'Delaware' },
    { code: 'FL', value: 'Florida' },
    { code: 'GA', value: 'Georgia' },
    { code: 'HI', value: 'Hawaii' },
    { code: 'ID', value: 'Idaho' },
    { code: 'IL', value: 'Illinois' },
    { code: 'IN', value: 'Indiana' },
    { code: 'IA', value: 'Iowa' },
    { code: 'KS', value: 'Kansas' },
    { code: 'KY', value: 'Kentucky' },
    { code: 'LA', value: 'Louisiana' },
    { code: 'ME', value: 'Maine' },
    { code: 'MD', value: 'Maryland' },
    { code: 'MA', value: 'Massachusetts' },
    { code: 'MI', value: 'Michigan' },
    { code: 'MN', value: 'Minnesota' },
    { code: 'MS', value: 'Mississippi' },
    { code: 'MO', value: 'Missouri' },
    { code: 'MT', value: 'Montana' },
    { code: 'NE', value: 'Nebraska' },
    { code: 'NV', value: 'Nevada' },
    { code: 'NH', value: 'New Hampshire' },
    { code: 'NJ', value: 'New Jersey' },
    { code: 'NM', value: 'New Mexico' },
    { code: 'NY', value: 'New York' },
    { code: 'NC', value: 'North Carolina' },
    { code: 'ND', value: 'North Dakota' },
    { code: 'OH', value: 'Ohio' },
    { code: 'OK', value: 'Oklahoma' },
    { code: 'OR', value: 'Oregon' },
    { code: 'PA', value: 'Pennsylvania' },
    { code: 'RI', value: 'Rhode Island' },
    { code: 'SC', value: 'South Carolina' },
    { code: 'SD', value: 'South Dakota' },
    { code: 'TN', value: 'Tennessee' },
    { code: 'TX', value: 'Texas' },
    { code: 'UT', value: 'Utah' },
    { code: 'VT', value: 'Vermont' },
    { code: 'VA', value: 'Virginia' },
    { code: 'WA', value: 'Washington' },
    { code: 'WV', value: 'West Virginia' },
    { code: 'WI', value: 'Wisconsin' },
    { code: 'WY', value: 'Wyoming' }];

  constructor() {
  }

  getStates() {
    return this.states;
  }
}
