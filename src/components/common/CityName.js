import { useContext } from 'react';
import styled from 'styled-components';
import CityContext from '../../context/city-context';

const NameWrapper = styled.section`
    display: flex;
    width: 100%;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-weight: 600;
        font-size: 1.4rem;
    }
`;

const CityName = () => {
    const { city } = useContext(CityContext);
    const cityName = city.name;
    const cityRegion = city.regionCode;

    return (
        <NameWrapper>
            <h1>{cityName}, {cityRegion}</h1>
        </NameWrapper>
    );
};

export default CityName;
