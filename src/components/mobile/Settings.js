import { useState, Fragment } from 'react';
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';
import UnitChange from './UnitChange';

const SettingsWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    padding: 0.6rem;
    border-radius: 50%;
    background-color: ${props => props.theme.mainGray};
    transition: background 0.8s;
    cursor: pointer;

    &:active {
        background-color: #d4d4d6;
        background-size: 100%;
        transition: background 0s;
    }
`;

const Settings = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const buttonClickHandler = () => {
        setIsMenuOpen(true);
    };

    const menuCloseHandler = () => {
        setIsMenuOpen(false);
    };

    return (
        <Fragment>
            <SettingsWrapper
                role="button"
                onClick={buttonClickHandler}
            >
                <FiSettings size={"1.3rem"} />
            </SettingsWrapper>
            {isMenuOpen &&
                <UnitChange
                    onClose={menuCloseHandler}
                />
            }
        </Fragment>
    );
};

export default Settings;
