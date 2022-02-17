import { Person } from 'src/app/models';

export const buildPerson = (name: string, age: number, hobby: string): Person => {
return { name, age, hobby };
};

export const buildPeople = (uselessCount: number): Person[] => {
return [
  buildPerson('Billy', 20, 'Snowboarding'),
  buildPerson('Bob', 21, 'Drawing'),
  buildPerson('Joe', 22, 'Boxing')
];
};

export const PersonUtils = {
  buildPerson,
  buildPeople
};
