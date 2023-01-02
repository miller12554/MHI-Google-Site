import React, { useState } from "react";
import "../ReadMore.css";

const HandyReadMore = ({ children }) => {
    const text = children;
    const [isHandyReadMore, setIsHandyReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsHandyReadMore(!isHandyReadMore);
    };
    return (
        <p className="text-lg">
            {isHandyReadMore ? text.slice(0, 3) : text}
            <span onClick={toggleReadMore} className="handy-read-or-hide">
                {isHandyReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

const HandyContent = () => {
    return (

        <div>
            <HandyReadMore>
                <ul><li>dsfdsf</li></ul>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, vitae libero nisi alias maxime assumenda quis temporibus nobis consequatur nesciunt aspernatur molestias consectetur autem esse, architecto fuga nulla dolores laboriosam illum natus, quas est voluptas. Animi ullam nisi odit iste nemo ratione incidunt quae voluptatum tempore nulla. Quam quis excepturi aliquid optio eveniet saepe. Adipisci?
            </HandyReadMore>
        </div>


    );
};

export default HandyContent;