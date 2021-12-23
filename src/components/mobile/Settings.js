import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';

const SettingsWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    padding: 0.6rem;
    border-radius: 50%;
    background-color: ${props => props.theme.backgroundGray};
    transition: background 0.8s;
    cursor: pointer;

    &:active {
        background-color: #d4d4d6;
        background-size: 100%;
        transition: background 0s;
    }
`;

const Settings = () => {
    return (
        <SettingsWrapper role="button">
            <FiSettings size="1.3rem" />
        </SettingsWrapper>
    );
};

export default Settings;
