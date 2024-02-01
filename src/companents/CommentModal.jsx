import { useEffect, useState } from "react";

const Comments = ({ onCancel }) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((result) => setComment(result));
    }, []);

    return (
        <div className='info-modal' onClick={onCancel}>
            <div className='info-content comment-content' onClick={(e) => e.stopPropagation()}>
                <button className='about-btn x-btn' onClick={onCancel}>
                    X
                </button>
                {comment.map((item) => (
                    <p>{item.name}</p>
                ))}
            </div>
        </div>
    );
};

export default Comments;
