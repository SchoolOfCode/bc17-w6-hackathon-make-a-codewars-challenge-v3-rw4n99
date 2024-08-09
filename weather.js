//Function for user to write
export function weatherPrediction(prediction) {
    const result = prediction
    if (result === "Foggy") {
        return "Clear";
    } else if
        (result === "Rainy") {
            return "sunny";
    } else if
        (result === "Snowy") {
            return "Dry"
    } else if
        (result === "Frosty") {
            return "Blazing"
    } else if
        (result === "Stormy") {
            return "calm" 
    } else {
        return "Unknown"
    }
        
}
