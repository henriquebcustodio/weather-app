import { useState, Fragment } from 'react';
import styled from 'styled-components';
import Search from "../common/Search/Search";
import Settings from './Settings';

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2.5rem;
    transition: all 0.2s;
`;

const Header = () => {
    const [showSettings, setShowSettings] = useState(true);

    const showSettingsHandler = () => {
        setShowSettings(true);
    };

    const hideSettingsHandler = () => {
        setShowSettings(false);
    };

    return (
        <Fragment>
            <HeaderWrapper>
                <Search
                    onFocus={hideSettingsHandler}
                    onBlur={showSettingsHandler}
                />
                {showSettings && <Settings />}
            </HeaderWrapper>
        </Fragment>
    );
};

export default Header;
