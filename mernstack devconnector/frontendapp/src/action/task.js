import { INC, DEC } from './types';

export const increment = (number) =>  (dispatch) => {
  dispatch ({
    type : INC ,
    payload : number
  })

};

export const decrement = (number) => (dispatch) => {
  dispatch ({
    type : DEC ,
    payload : number 
  })
};