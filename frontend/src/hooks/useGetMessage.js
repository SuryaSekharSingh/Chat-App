import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';

const useGetMessage = () => {

  const {messages, setMessages, selectedConversation} = useConversation();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
      const getMessages = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/message/${selectedConversation._id}`)
            if(!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            const data = await res.json();
            if(data.error)  throw new Error(data.error);
            setMessages(data);
    
        } catch (error) {

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
      }
      if(selectedConversation?._id) getMessages();

  }, [selectedConversation?._id, setMessages]);

  return {loading, messages};
}

export default useGetMessage