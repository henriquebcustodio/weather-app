import { useContext, Fragment, useState } from 'react';
import styled from 'styled-components';
import CityName from '../components/common/CityName';
import CurrentWeather from '../components/common/CurrentWeather';
import Forecast from '../components/mobile/Forecast';
import Header from '../components/common/Header';
import WeatherContext from '../context/weather-context';
import CityContext from '../context/city-context';
import Highlights from '../components/mobile/Highlights';
import BubbleLoading from '../components/UI/BubbleLoading';


const MobileWrapper = styled.main`
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow-y: scroll;
`;

const Break = styled.hr`
    width: 90%;
    border: 0;
    margin: 0;
    margin-top: 1.5rem;
    border: 1px solid ${props => props.theme.mainGray};
    opacity: 0.5;
`;



const Mobile = () => {
    const { isBusy: weatherCtxBusy } = useContext(WeatherContext);
    const { isBusy: cityCtxBusy } = useContext(CityContext);
    const [showContent, setShowContent] = useState(true);

    const isSearchingHandler = newShowContent => {
        setShowContent(newShowContent);
    };

    return (
        <MobileWrapper id="main">
            <Header
                setShowContent={isSearchingHandler}
                searchDropdownContainer={document.getElementById('main')}
            />
            {(!weatherCtxBusy && !cityCtxBusy && showContent) &&
                <Fragment>
                    <CityName />
                    <CurrentWeather />
                    <Break />
                    <Forecast />
                    <Break />
                    <Highlights />
                </Fragment>
            }
            {(showContent && (weatherCtxBusy || cityCtxBusy)) &&
                <BubbleLoading />
            }
        </MobileWrapper>
    );
};

export default Mobile;
