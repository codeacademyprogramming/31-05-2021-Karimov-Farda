import { ASYNC_STATUS } from "../../../redux/consts";
import { TEMPERATURE_ACTIONS } from "../actions/consts";
const initialState = {
    error: null,
    data:[],
    status : ASYNC_STATUS.CREATED
}

export function temperatureReducer(state = initialState,action){

switch(action.type){
    
    case `${TEMPERATURE_ACTIONS.GET_TEMPERATURE}_CREATED`:
    
        return {
            ...state,
            status : ASYNC_STATUS.CREATED,
            data : action.payload,
            error : null
        }
     
    case `${TEMPERATURE_ACTIONS.GET_TEMPERATURE}_ERROR`:
        return{
            ...state,
            status : ASYNC_STATUS.ERROR,
            error : action.error
        }    
        default:
        break;
}



return state
}