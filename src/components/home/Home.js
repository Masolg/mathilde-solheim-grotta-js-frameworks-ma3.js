import React from 'react';
import Heading from "../layout/Heading";
import HomeContent from "./HomeContent";

export function Home() {
    return (
        <>
            <Heading content="Home" />
            <HomeContent children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt tellus id orci pellentesque luctus. Maecenas ac enim in tellus mollis feugiat. Mauris eget faucibus ipsum. Nam iaculis est nec leo cursus molestie. Aliquam venenatis nisl felis, in cursus ante rutrum ut. Nunc quis maximus magna, non venenatis sapien. " />
        </>
    );
}

export default Home;
