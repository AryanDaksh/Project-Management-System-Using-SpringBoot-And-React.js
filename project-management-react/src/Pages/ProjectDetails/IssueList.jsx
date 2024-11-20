import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.jsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import IssueCard from "@/Pages/ProjectDetails/IssueCard.jsx";
import {Button} from "@/components/ui/button.jsx";
import {PlusIcon} from "@radix-ui/react-icons";
import CreateIssueForm from "@/Pages/ProjectDetails/CreateIssueForm.jsx";

const IssueList = ({title, status}) => {
    return (
        <div>
            <Dialog>
                <Card className="w-full md:w-[300px] lg:w-[310px]">
                    <CardHeader className="">
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {[1,1,1].map((item) => <IssueCard key={item} />)}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <DialogTrigger>
                            <Button variant="outline" className="w-full flex items-center gap-2"><PlusIcon/>Create Issue</Button>

                        </DialogTrigger>
                    </CardFooter>
                </Card>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Issue</DialogTitle>
                    </DialogHeader>
                    <CreateIssueForm/>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default IssueList;