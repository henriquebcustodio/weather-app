import styled from 'styled-components';
import getWeatherIcon from "../../assets/WeatherIcons/WeatherIcons";

const Icon = styled.img`
    display: 'block';
    height: 100%;
`;

const WeatherIcon = props => {
    const iconSrc = getWeatherIcon(props.id, props.isNight);

    return (
        <Icon src={iconSrc.default} alt="Weather Condition" />
    );
};

export default WeatherIcon;
