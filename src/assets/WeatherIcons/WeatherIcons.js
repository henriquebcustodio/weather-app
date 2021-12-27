const getWeatherIcon = (weatherId, isNight) => {
    //More information about the weather conditions:
    //https://openweathermap.org/weather-conditions

    weatherId = weatherId.toString();

    if (weatherId.startsWith('2')) {
        return require('./thunderstorm-showers.svg');
    }
    if (weatherId.startsWith('3')) {
        return require('./showers.svg');
    }
    if (weatherId.startsWith('6')) {
        return require('./snow.svg');
    }
    if (weatherId.startsWith('7')) {
        return require('./fog.svg');
    }
    if (weatherId.startsWith('5')) {
        if (weatherId === '511') {
            return require('./sleet.svg');
        }
        return require('./heavy-showers.svg');
    }
    if (weatherId.startsWith('80')) {
        if (weatherId === '800') {
            if (isNight) {
                return require('./clear-night.svg');
            }
            return require('./clear-day.svg');
        }
        if (weatherId === '801') {
            if (isNight) {
                return require('./partly-cloudy-night.svg');
            }
            return require('./partly-cloudy-day.svg');
        }
        if (weatherId === '802') {
            return require('./cloudy.svg');
        }
        return require('./broken-clouds.svg');
    }
};

export default getWeatherIcon;