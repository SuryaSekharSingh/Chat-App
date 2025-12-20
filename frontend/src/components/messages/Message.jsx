import React from 'react'

const Message = () => {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-bubble bg-blue-500 rounded-lg text-white">Destroy the Sith.</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:45</div>
            </div>
            
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-bubble bg-blue-500 text-white rounded-lg">Not leave it in Darkness</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:45</div>
            </div>
        </div>
    )
}

export default Message