import React,{useEffect,useState} from "react";
import './Chatroom.css';
import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
import { useGlobalContext } from "../context";

const Chatroom = () => {
  const { ContextData } = useGlobalContext();
  return (
    <div>Lets chat
    </div>
  );
};

export default Chatroom;