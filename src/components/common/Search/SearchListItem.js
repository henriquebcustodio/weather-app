import styled from 'styled-components';

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
`;

const SearchListItem = props => {

    const clickHandler = () => {
        props.onClick(props.data);
    };

    return (
        <ListItem onClick={clickHandler}>
            {`${props.data.city}, ${props.data.region}, ${props.data.country}`}
        </ListItem>
    );
};

export default SearchListItem;
