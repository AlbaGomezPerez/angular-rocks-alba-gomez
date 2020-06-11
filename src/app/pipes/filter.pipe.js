import { Pipe, PipeTransform} from "@angular/core";

@pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: any[], args: string): any[] {
    const resultBands = [];
    for (const band of value){
      if(band.name.indexOf(args) > -1 ) {
        resultBands.push(band);
      };
    };
    return resultBands;
  }
}
