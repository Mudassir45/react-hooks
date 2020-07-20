import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching3() {
    const [post, setpost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setpost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = ()=> {
        setIdFromButtonClick(id);
    }

    // in last of useEffect we specify id in empty array as a dependency so that our ui renders again when id changes and new title will occur
    
return (
        <div>
            <input  type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick} >Fetch Post</button>
            <div>{post.title}</div>
            
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching3
