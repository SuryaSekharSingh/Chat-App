import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                let data = await fetch("/api/users");
                data = await data.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);

            } catch (error) {
                toast.error(data.error);
            } finally {
                setLoading(false);
            }
        }

        getConversations();
    }, []);
    return { loading, conversations };
}

export default useGetConversations