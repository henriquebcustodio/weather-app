import styled from 'styled-components';
import Search from "../common/Search";
import Settings from './Settings';

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2.5rem;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Search />
            <Settings />
        </HeaderWrapper>
    );
};

export default Header;
