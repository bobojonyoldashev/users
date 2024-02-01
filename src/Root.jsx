import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Info from "./companents/InfoModal";
import Comments from "./companents/CommentModal";

const Root = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((result) => setUser(result));
    }, []);

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((result) => setPost(result));
    }, []);

    const handlyClick = () => {
        {
            post.map(item => (
                item.title
            ))
        }
    };

    console.log(handlyClick());

    const [open, setOpen] = useState(false);

    const handlyOpenModal = () => {
        setOpen(true);
    };

    const handlyCancel = () => {
        setOpen(false);
    };

    return (
        <div className='root'>
            <h1 className='root-title'>TITLE</h1>
            <div className='main'>
                <div className='users-list'>
                    <h2 className='users-title'>USERS</h2>
                    {user.map((item) => (
                        <p key={item.id} className='user' onClick={handlyClick}>
                            {item.name}
                            <button
                                className='about-btn'
                                onClick={handlyOpenModal}>
                                •••
                            </button>
                        </p>
                    ))}
                </div>
                <div className='post-list'>
                    <h2 className='post-title'>POSTS</h2>
                    {post.map((item) => (
                        <p key={item.id} className='user' onClick={handlyClick}>
                            {item.title}{" "}
                            <button
                                className='comment-btn about-btn'
                                onClick={handlyOpenModal}>
                                COMMENTS
                            </button>
                        </p>
                    ))}
                </div>
            </div>

            {open &&
                createPortal(
                    <Info onCancel={handlyCancel} />,
                    document.body)}

            {open &&
                createPortal(
                    <Comments onCancel={handlyCancel} />,
                    document.body
                )}
        </div>
    );
};

export default Root;
