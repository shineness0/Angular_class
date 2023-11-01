import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  public students: string[] = ['Olamide','Ayomide','Jinad','Victor','Samuel']
  constructor() { }
  getNames(){
    return this.students
  }
}
