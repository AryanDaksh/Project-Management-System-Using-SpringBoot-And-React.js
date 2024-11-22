import React from 'react';
import { Card } from "@/components/ui/card.jsx";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import { Button } from "@/components/ui/button.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteProject} from "@/Redux/Project/Action.js";

const ProjectCard = ({item}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    if (!item) {
        return <div>Loading...</div>; // Show loading state if item is not available
    }

    const handleDelete = () => {
        dispatch(deleteProject({projectId: item.id}));
    }

    return (
        <Card className="p-5 w-full lg:max-w-3xl">
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <h1
                            onClick={() => navigate("/project/3")}

                            className="cursor-pointer font-bold text-lg">
                            {item.projectName}
                        </h1>
                        <div className="flex items-center text-sm text-gray-400">
                            <DotFilledIcon className="mr-1"/>
                            <p>{item.category}</p>
                        </div>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button className="rounded-full" variant="ghost" size="icon">
                                <DotsVerticalIcon/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Update</DropdownMenuItem>
                            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

                <div>
                    <p className="text-gray-500 text-sm mb-4">
                        {item.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                    {item.tags.map((tag)=><Badge key={item} variant="outline">{tag}</Badge>)}
                </div>
            </div>
        </Card>
    );
}

export default ProjectCard;
