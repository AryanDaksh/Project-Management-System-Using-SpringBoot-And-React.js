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

const ProjectCard = () => {

    const navigate = useNavigate();

    return (
        <Card className="p-5 w-full lg:max-w-3xl">
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <h1
                            onClick={() => navigate("/project/3")}

                            className="cursor-pointer font-bold text-lg">
                            Create Ecommerce Project
                        </h1>
                        <div className="flex items-center text-sm text-gray-400">
                            <DotFilledIcon className="mr-1"/>
                            <p>Full-Stack</p>
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
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

                <div>
                    <p className="text-gray-500 text-sm mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                    {[1,1,1,1].map((item)=><Badge key={item} variant="outline">Full-Stack</Badge>)}
                </div>
            </div>
        </Card>
    );
}

export default ProjectCard;
