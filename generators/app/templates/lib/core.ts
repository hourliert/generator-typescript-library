/// <reference path="./all.d.ts" />

export interface IMyLibraryConfiguration {
  name: string;
}

export class MyLibrary {
  private computedName: string;
  
  constructor (
    private config: IMyLibraryConfiguration = {
      name: 'Bob'
    }
  ) {
    this.computedName = this.config.name + ' Moran';      
  }
  
  get name(): string {
    return this.computedName;
  }
}
