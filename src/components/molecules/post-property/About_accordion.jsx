import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const About_accordion = ({ ...props }) => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Unique Features About property
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-sm md:text-base">
                            {props.uniqueFeatures}
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default About_accordion;
