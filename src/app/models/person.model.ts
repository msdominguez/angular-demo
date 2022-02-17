/*
One way to do it that tslint doesn't like
export type Person = {
  name: string;
  age: number;
  hobby?: string;
};
*/

export interface Person {
  name: string;
  age: number;
  hobby?: string;
}

/*
export const initialPerson: Person = {
  name: 'Bob',
  age: 22,
  hobby: 'biking'
};
*/
