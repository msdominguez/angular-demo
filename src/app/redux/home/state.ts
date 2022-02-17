import * as moment from 'moment';

export interface State {
  headerText: string;
  count: number;
  timestamp: string;
}

export const initialState: State = {
  headerText: 'Welcome to my demo!',
  count: 0,
  timestamp: moment().format('MMM Do YY')
};
