import { Fragment } from 'react';
import styled from 'styled-components';
import getWeatherIcon from "../../assets/WeatherIcons/WeatherIcons";
import SpinLoading from '../UI/SpinLoading';

const Icon = styled.img`
    display: block;
    height: 100%;
`;

const WeatherIcon = props => {
    const iconSrc = getWeatherIcon(props.id, props.isNight);

    return (
        <Fragment>
            {props.isNight !== undefined ?
                <Icon
                    src={iconSrc.default}
                    alt="Weather Condition"
                /> : ''}
            {props.isNight === undefined ?
                <SpinLoading /> : ''}
        </Fragment>

    );
};

export default WeatherIcon;
