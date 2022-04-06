import {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


function Like(){
    useEffect(() => {console.log("Like is updating:"+like)})
    const [like,setLike]= useState(0);
    return(
        <Badge badgeContent={like} color="primary">
            <IconButton aria-label="like" onClick={()=>setLike(like+1)} className="bt-sz-lg" color="primary">
                👍
            </IconButton>
        </Badge>
    );
}

function Dislike(){
    const [dislike,setDislike]= useState(0);
    return(
        <Badge badgeContent={dislike} color="error">
            <IconButton aria-label="dislike" onClick={()=>setDislike(dislike+1)} className="bt-sz-lg" color="error">
                👎
            </IconButton>
        </Badge>
    );
}

export {Like,Dislike}