import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text-lg px-3">
            {isReadMore ? text.slice(0, 75) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

const Content = () => {
    return (
        <div className="">
            <h2>
                <ReadMore>
                    GeeksforGeeks: A Computer Science portal for geeks.
                    It contains well written, well thought and well explained
                    computer science, programming articles and quizzes.
                    It provides a variety of services for you to learn, so thrive
                    and also have fun! Free Tutorials, Millions of Articles, Live,
                    Online and Classroom Courses ,Frequent Coding Competitions,
                    Webinars by Industry Experts, Internship opportunities, and Job
                    Opportunities. Knowledge is power!
                </ReadMore>
            </h2>
        </div>
    );
};

export default Content;