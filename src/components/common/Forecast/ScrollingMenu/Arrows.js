import styled, { css } from 'styled-components';
import { Fragment, useContext } from 'react';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const wrapperStyle = css`
    position: absolute;
    top: calc(50% - 1rem);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    box-shadow: 1px 2px 5px -1px rgba(0, 0, 0, 0.5);
    background-color: white;
    z-index: 10;
    transition: transform 0.2s;
    cursor: pointer;

    :hover {
        transform: translateY(-2px);
    }
`;

const RightWrapper = styled.div`
    ${wrapperStyle}
    right: -1rem;
`;

const LeftWrapper = styled.div`
    ${wrapperStyle}
    left: -1rem;
`;

export const LeftArrow = props => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Fragment>
            {props.show &&
                <LeftWrapper role="button" onClick={() => scrollPrev()}>
                    <FiArrowLeft
                        size="1.5rem"
                    />
                </LeftWrapper>
            }
        </Fragment>
    );
};

export const RightArrow = props => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Fragment>
            {props.show &&
                <RightWrapper role="button" onClick={() => scrollNext()}>
                    <FiArrowRight
                        size="1.5rem"
                    />
                </RightWrapper>
            }
        </Fragment>
    );
};