import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

function UserBoard(props)  {
    const { userId, storePhotos } = props;
    
    useEffect(() => {
        const url = `https://localhost:8081/photo/get/${userId}`;

        fetch(url, {
            method: 'get',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(json => { 
            storePhotos(json);
        })
    })

    return (
        <div>Userboard works!</div>
    )
}

export default UserBoard;
