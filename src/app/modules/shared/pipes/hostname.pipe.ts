import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hostname'
})
export class HostnamePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace('http://HOSTNAME', 'https://new.joshsfrogs.com');
  }
}
