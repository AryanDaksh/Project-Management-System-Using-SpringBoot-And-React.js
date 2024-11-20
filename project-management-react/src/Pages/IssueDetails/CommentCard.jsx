import React from 'react';
import {Avatar, AvatarFallback} from "@/components/ui/avatar.jsx";
import {Button} from "@/components/ui/button.jsx";
import {TrashIcon} from "@radix-ui/react-icons";

const CommentCard = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>

                <div className="scroll-py-1">
                    <p>Aryan Daksh</p>
                    <p>How much work is pending</p>
                </div>

                <Button className="rounded-full" variant="ghost" size="icon">
                    <TrashIcon/>
                </Button>
            </div>
        </div>
    )
}

export default CommentCard;