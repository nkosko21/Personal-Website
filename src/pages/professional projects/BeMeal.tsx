import { useHover } from "@mantine/hooks";
import React from "react";
import BeMeal_Feed from '../../images/BeMeal_Feed.png';

export default function BeMeal() {
    return(
        <div className="row">
            <img src={BeMeal_Feed} alt="BeMeal Feed" style={{ height: 450, width: 'auto' }}/>
            <p style={{ marginLeft: 15 }}>
                BeMeal is a social media platform for foodies. It is a full-stack IOS application that allows users to share pictures of their meals and the rescpective recipe, 
                with the social feed resetting daily to make room for the next day's meals. BeMeal was created by me and a colleague
                and built using Swift and Google Firebase. 
            </p>
        </div>
    );
}