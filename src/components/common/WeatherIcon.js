import getWeatherIcon from "../../assets/WeatherIcons/WeatherIcons";

const WeatherIcon = props => {
    const iconSrc = getWeatherIcon(props.id, props.isNight);

    return (
        <img src={iconSrc.default} alt="Weather Condition" style={{ display: 'block' }} />
    );
};

export default WeatherIcon;
