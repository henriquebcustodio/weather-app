import styled from 'styled-components';
import ReactLoading from 'react-loading';
import colorScheme from '../../colors/color-scheme';

const LoadingWrapper = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BubbleLoading = () => {
    return (
        <LoadingWrapper>
            <ReactLoading
                type={'bubbles'}
                color={colorScheme.blue}
                height={'7rem'}
                width={'7rem'}
            />
        </LoadingWrapper>
    );
};

export default BubbleLoading;