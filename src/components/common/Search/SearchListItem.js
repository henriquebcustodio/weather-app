import styled from 'styled-components';
import { MdOutlineLocationOn } from 'react-icons/md';

const ListItem = styled.li`
    display: flex;
    align-items: center;
    min-height: 2.5rem;
    height: 2.5rem;
    width: 100%;
    margin: 0.7rem 0;
    cursor: pointer;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    min-height: 2rem;
    height: 2rem;
    width: 2rem;
    background-color: ${props => props.theme.mainGray};
    border-radius: 50%;

    svg {
        height: 1.3rem;
        width: 1.3rem;
        color: rgba(0, 0, 0, 0.75);
    }
`;

const Description = styled.div`
    display: flex;
    height: 100%;
    width: 90%;
    align-items: center;
    margin-left: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid ${props => `rgba(${props.theme.mainGrayRGB}, 1)`};

    p {
        width: 90%;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const SearchListItem = props => {

    const clickHandler = () => {
        props.onClick(props.data);
    };

    return (
        <ListItem onClick={clickHandler}>
            <IconWrapper>
                {props.customIcon ? props.customIcon : ''}
                {!props.customIcon ? <MdOutlineLocationOn /> : ''}
            </IconWrapper>
            <Description>
                <p>{props.data.full_name}</p>
            </Description>
        </ListItem>
    );
};

export default SearchListItem;
