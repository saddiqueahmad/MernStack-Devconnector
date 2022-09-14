import { DEC, INC } from "../../action/types";


const data = 20;

function dataReducer(state = data, action) {

    const { type, payload } = action;

    switch (type) {
      case INC:
        return [...state, payload];
      case DEC:
        return [...state, payload]
      default:
        return state;
    }
 
     
      
 
}

export default dataReducer;