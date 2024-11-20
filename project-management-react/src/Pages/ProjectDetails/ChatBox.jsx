import React, {useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Avatar, AvatarFallback} from "@/components/ui/avatar.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {PaperPlaneIcon} from "@radix-ui/react-icons";

const ChatBox = () => {

    const [message, setMessage] = useState("");
    const handleSendMessage=()=>{
        console.log("message", message);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className="sticky ">
            <div className="border rounded-lg">

                <h1 className="border-b p-5">Chat Box</h1>

                <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col text-left">
                    {[1, 1, 1, 1].map((item, index) => (
                        index%2==0 ?
                            <div className="flex gap-2 mb-2 justify-start" key={index}>
                                <Avatar>
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                                    <p>Aryan</p>
                                    <p className="text-gray-300">How are you?</p>
                                </div>
                            </div> :
                            <div className="flex gap-2 mb-2 justify-end" key={index}>
                                <Avatar>
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                                    <p>Aryan</p>
                                    <p className="text-gray-300">How are you?</p>
                                </div>
                            </div>
                    ))}
                </ScrollArea>

                <div className="relative p-0">
                    <Input
                        placeholder= "Type Message"
                        className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
                        value={message} onChange={handleMessageChange}
                    />
                    <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
                        <PaperPlaneIcon/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox