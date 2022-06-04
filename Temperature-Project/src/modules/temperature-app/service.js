import { HttpClient } from "../httpClient";

class TemperatureService extends HttpClient{
    constructor(){
        super("https://api.npoint.io/")
    }
    getTemperature(){
        return this.get("2eee44ae4b1a08fe552c")
        
    }
    getTemperatureById(id,temperature){
        return temperature.find((element) => element.id === id)
    }
}

export const temperatureService = new TemperatureService()