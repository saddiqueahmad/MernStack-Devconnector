import { DEC, INC } from "../../action/types";

const data = {value: 0};


function dataReducer(state = data, action) {
  const { type, payload } = action;

  switch (type) {
    case INC:
      return {...state,value: state.value +payload};
    case DEC:
        return {...state,value: state.value -payload};
    default:
      return state;
  }
}

export default dataReducer;


 
     
  