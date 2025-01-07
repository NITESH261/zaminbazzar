import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const About_accordion = () => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Address</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, vitae temporibus!
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default About_accordion




