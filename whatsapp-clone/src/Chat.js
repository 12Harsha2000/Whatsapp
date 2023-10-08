import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';

function Chat() {
  const [seed, setSeed] = useState(""); 
  return(
   <div className='chat'>
    <div className="chat_header">
     <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

     <div className="chat_headerInfo">
      <h3>Room Name</h3>
      <p>Last seen at...</p>
     </div>

     <div className="chat_headerRight">
      <IconButton>
        <SearchOutlined />
      </IconButton>
      <IconButton>
        <AttachFile />
      </IconButton>
      <IconButton>    
        <MoreVert />
      </IconButton>
      </div>
    </div>

    <div className="chat_body">
    <p className="chat_message chat_reciever">
      <span className="chat_name">Kiran</span>
      Hey Guys
      <span className="chat_timestamp">3:52pm</span>
    </p>
    </div>
    <div className="chat_footer"></div>
   </div>
 );
}

export default Chat;