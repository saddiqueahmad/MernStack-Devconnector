import { INC, DEC } from './types';

export const INC = (number) => dispatch => {
  dispatch({
    type: INC,
    payload: number
  });

};

export const DEC = (number) => dispatch => {
  dispatch({
    type: DEC,
    payload: number
  });

};