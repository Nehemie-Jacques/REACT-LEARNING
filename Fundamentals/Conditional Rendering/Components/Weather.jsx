const Weather = () => {
    let temp = 26;

    if (temp < 15) {
        return <div>It's cold outside</div> 
    } else if (temp >= 15 && temp <= 25) {
        return <div>It's warm outside</div> 
    } else if (temp > 25) {
        return <div>It's hot outside</div>
        
    }
}

export default Weather;