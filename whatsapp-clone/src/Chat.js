import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic"
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
  const [input, setInput] = useState("")  
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  
  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))
    }
  }, [roomId])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);
    
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Message sent:", input);
    setInput("");
  };

  return(
   <div className='chat'>
    <div className="chat_header">
     <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

     <div className="chat_headerInfo">
      <h3>{roomName}</h3>
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
    <p className={`chat_message ${true && "chat_reciever"}`}>
      <span className="chat_name">Kiran</span>
      Hey Guys
      <span className="chat_timestamp">3:52pm
      </span>
    </p>
    </div>

    <div className="chat_footer">
     <InsertEmoticonIcon />
    <form onSubmit={sendMessage}>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
      <button type="submit">Send a message</button>  
    </form>
     <MicIcon />
    <button/>
   </div>
 </div>
 );
}

export default Chat;
