import React from "react";
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog.jsx";
import CreateProjectForm from "@/pages/Projects/CreateProjectForm.jsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {PersonIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="border-b py-4 px-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <p onClick={()=> navigate("/")} className="cursor-pointer">Promana</p>

                <Dialog>

                    <DialogTrigger>
                        <Button variant="ghost">New Project</Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>Create New Project</DialogHeader>
                        <CreateProjectForm/>
                    </DialogContent>
                </Dialog>

                <Button onClick={()=> navigate("/upgrade_plan")} variant="ghost">Upgrade Plan</Button>
            </div>

            <div className="flex items-center gap-3">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <PersonIcon/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>Aryan Daksh</p>
            </div>
        </div>
    )
}

export default Navbar;