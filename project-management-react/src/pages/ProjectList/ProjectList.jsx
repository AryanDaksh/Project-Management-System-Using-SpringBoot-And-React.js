// noinspection JSValidateTypes

// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Card, CardContent} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import {RadioGroup} from "@radix-ui/react-radio-group";
import {Label} from "@radix-ui/react-label";
import {MixerHorizontalIcon} from "@radix-ui/react-icons";
import {RadioGroupItem} from "@/components/ui/radio-group.jsx";

const ProjectList = () => {

    const handleFilterChange = (section, value) => {
        console.log("value", value, section)
    }

    const tags = [
        "All",
        "React",
        "Next.js",
        "Angular",
        "Flask",
        "Spring Boot",
        "Node.js",
        "Django",
        "MySQL",
        "MongoDB",
        "Java",
        "Python"
    ];

    return (
        <>
            <div className= 'relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
                <section className = 'filter section'>
                    <Card className = "p-5 sticky top-10">
                        <div className = "flex justify-between lg:w-[20rem]">
                            <p className = 'text-xl -tracking-wider' >Filters</p>
                            <Button variant = "ghost" size="icon">
                                <MixerHorizontalIcon/>
                            </Button>
                        </div>
                        <CardContent className="mt-5">
                            <ScrollArea className="space-y-7 h-[70vh] overflow-y-auto">
                                <div>
                                    <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                                    <div className="pt-5">
                                        <RadioGroup
                                            className="space-y-3 pt-5"
                                            defaultValue="all"
                                            onValueChange={(value) => handleFilterChange("category", value)}>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value='Full-Stack' id='r1'/>
                                                <Label htmlFor='r1'>Full-Stack</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value='Front-End' id='r2'/>
                                                <Label htmlFor='r2'>Front-End</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value='Back-End' id='r3'/>
                                                <Label htmlFor='r3'>Back-End</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value='Others' id='r4'/>
                                                <Label htmlFor='r4'>Others</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <h2 className="pb-3 text-gray-400 border-b">Tags</h2>
                                    <div className="pt-9">
                                        <RadioGroup
                                            className="space-y-3 pt-5"
                                            defaultValue="all"
                                            onValueChange={(value) => handleFilterChange("tag", value)}>

                                            {tags.map((item) => <div key={item} className="flex items-center gap-2">
                                                <RadioGroupItem value={item} id={`r1-${item}`}/>
                                                <Label htmlFor={`r1-${item}`}>{item}</Label>
                                            </div>)}
                                        </RadioGroup>
                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </section>
                <section className='projectListSection w-full lg:w-[48rem]'></section>
            </div>
        </>
    )
}

export default ProjectList;