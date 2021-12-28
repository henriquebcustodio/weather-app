import { useContext } from 'react';
import styled from 'styled-components';
import CityContext from '../../context/city-context';

const NameWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.5rem;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-weight: 600;
        font-size: 1.6rem;
    }

    h2 {
        margin: 0;
        font-weight: 500;
        font-size: 1rem;
        margin-top: 0.5rem;
    }
`;

const CityName = () => {
    const { city } = useContext(CityContext);
    const cityName = city.name;
    const cityRegion = city.region;

    return (
        <NameWrapper>
            <h1>{cityName}</h1>
            <h2>{cityRegion}</h2>
        </NameWrapper>
    );
};

export default CityName;
