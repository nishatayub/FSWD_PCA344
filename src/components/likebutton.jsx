import React, { useState } from 'react'

const likebutton = () => {
    const [liked, setLiked] = useState(false);

    const handleLike = () =>{
        setLiked(!liked);
    }
  return (
    <div>
      <button onClick={handleLike} style={
        {backgroundColor: liked ? "red" : "grey",
            color: "white",
            border: "none"
         }
        
      }>
        {liked ? "Liked ❤️" : "Like"}
      </button>
    </div>
  )
}

export default likebutton
