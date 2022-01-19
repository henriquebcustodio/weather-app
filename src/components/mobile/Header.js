import { useState, Fragment } from 'react';
import styled from 'styled-components';
import Search from "../common/Search/Search";
import Settings from './Settings';

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 2.5rem;
    height: 2.5rem;
    transition: all 0.2s;
    z-index: 10;
`;

const Header = props => {
    const [showSettings, setShowSettings] = useState(true);

    const onSearchEndHandler = () => {
        setShowSettings(true);
        props.setShowContent(true);
    };

    const onSearchStartHandler = () => {
        setShowSettings(false);
        props.setShowContent(false);
    };

    return (
        <Fragment>
            <HeaderWrapper>
                <Search
                    onSearchStart={onSearchStartHandler}
                    onSearchEnd={onSearchEndHandler}
                    searchDropdownContainer={props.searchDropdownContainer}
                />
                {showSettings && <Settings />}
            </HeaderWrapper>
        </Fragment>
    );
};

export default Header;
