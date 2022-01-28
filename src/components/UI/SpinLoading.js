import styled from "styled-components";
import ReactLoading from 'react-loading';
import colorScheme from "../../colors/color-scheme";

const LoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const SpinLoading = () => {
    return (
        <LoadingWrapper>
            <ReactLoading
                type={'spin'}
                color={colorScheme.blue}
                height={'2rem'}
                width={'2rem'} />
        </LoadingWrapper>
    );
};

export default SpinLoading;