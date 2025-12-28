import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const {selectedConversation} = useConversation();
    const date = new Date(message.createdAt);
    const time12 = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    const fromMe = authUser._id === message.senderId;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
    const name = fromMe ? authUser.fullName : selectedConversation.fullName;

    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt={name} src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble rounded-lg text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{time12}</div>
            </div>

        </div>
    )
}

export default Message