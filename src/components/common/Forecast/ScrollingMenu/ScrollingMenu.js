import { useState } from 'react';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { RightArrow, LeftArrow } from "./Arrows";

const ScrollingMenu = props => {
    const [hovered, setHovered] = useState(false);

    const onMouseEnterHandler = () => {
        if (!hovered) {
            setHovered(true);
        }
    };

    const onMouseLeaveHandler = () => {
        if (hovered) {
            setHovered(false);
        }
    };

    return (
        <div
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            {props.isDesktop &&
                <ScrollMenu
                    RightArrow={<RightArrow show={hovered} />}
                    LeftArrow={<LeftArrow show={hovered} />}
                >
                    {props.children}
                </ScrollMenu>
            }
            {!props.isDesktop &&
                <ScrollMenu>
                    {props.children}
                </ScrollMenu>
            }
        </div>
    );
};

export default ScrollingMenu;