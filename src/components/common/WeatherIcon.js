import { Fragment } from 'react';
import styled from 'styled-components';
import getWeatherIcon from "../../assets/WeatherIcons/WeatherIcons";
import ReactLoading from 'react-loading';
import colorScheme from '../../colors/color-scheme';

const Icon = styled.img`
    display: 'block';
    height: 100%;
`;

const LoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
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
                <LoadingWrapper>
                    <ReactLoading
                        type={'spin'}
                        color={colorScheme.blue}
                        height={'2rem'}
                        width={'2rem'} />
                </LoadingWrapper> : ''}
        </Fragment>

    );
};

export default WeatherIcon;
