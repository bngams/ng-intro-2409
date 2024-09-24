import { Pipe, PipeTransform } from '@angular/core';

/**
 * Some custom transformation
 * Ex:
 *   string | myCustomTransformation
 *   myVar | myCustomTransformation
 */
@Pipe({
  name: 'myCustomTransformation',
  standalone: true
})
export class MyCustomTransformationPipe implements PipeTransform {

  transform(value: string): string {
    return `My transformed string is ${value}`;
  }

}
