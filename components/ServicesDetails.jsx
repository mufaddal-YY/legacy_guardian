import React from "react";
import PortableTextComponent from "./ui/PortableTextComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ServicesDetails = ({ serviceTitle, content }) => {
  return (
    <main>
      <section>
        <div className="py-2">
          <Accordion type="single" collapsible>
            <AccordionItem value={1}>
              <AccordionTrigger className="text-[#002866]">
                <h4 className="text-lg font-semibold ">{serviceTitle}</h4>
              </AccordionTrigger>
              <AccordionContent>
                <PortableTextComponent content={content} />{" "}
              </AccordionContent>
            </AccordionItem>
          </Accordion>{" "}
        </div>
      </section>
    </main>
  );
};

export default ServicesDetails;
