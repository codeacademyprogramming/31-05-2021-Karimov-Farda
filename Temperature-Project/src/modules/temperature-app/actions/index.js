import { temperatureService } from "../service";
import { TEMPERATURE_ACTIONS } from "./consts";

export function getTemperature(){
      return function(dispatch) {
        dispatch({type : TEMPERATURE_ACTIONS.GET_TEMPERATURE});
        temperatureService.getTemperature().then((data) => {
            dispatch({
            type : `${TEMPERATURE_ACTIONS.GET_TEMPERATURE}_CREATED`,
            payload : data.data
        })
    }).catch((err) => {
        dispatch({
            type :`${TEMPERATURE_ACTIONS.GET_TEMPERATURE}_ERROR`,
            error : err
        })
    })
}
   
}

