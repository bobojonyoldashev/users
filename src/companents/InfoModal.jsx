import { useEffect, useState } from "react";

const Info = ({ onCancel }) => {
    
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((result) => setUser(result));
    }, []);

    return (
        <div
            className='info-modal'
            onClick={onCancel}>
            <div
                className="info-content"
                onClick={(e) => e.stopPropagation()}>
                <button className="about-btn x-btn" onClick={onCancel}>X</button>
                {
                    user.map(item => (
                        <p>{`Phone: ${item.phone}`}</p >
                    ))
                }
            </div>
        </div>
    );
}

export default Info;
