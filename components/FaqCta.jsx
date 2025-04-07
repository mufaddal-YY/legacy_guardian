"use client";

import { Amiri } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "./ui/input";
import EnquiryForm from "./EnquiryForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const FaqCta = ({ faqs }) => {
  return (
    <>
      <section className="py-[50px] lg:py-[80px] bg-gray-50 flex items-center justify-center">
        <div className="container">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between">
              <div className="w-full md:w-7/12 lg:w-7/12 p-4">
                <div className="mb-4">
                  <h4 className="text-sm py-1 lg:text-sm text-[#dfa459] tracking-wide uppercase font-regular ">
                    LEGACY GUARDIANS
                  </h4>
                  <h1
                    className={`text-3xl tracking-wide text-[#002866] font-semibold mb-2 ${amiri.className}`}>
                    Frequently Asked Questions
                  </h1>
                </div>
                <hr />
                {faqs.map((item) => (
                  <Accordion type="single" collapsible>
                    {item.faqType.map((data, index) => (
                      <AccordionItem value={index + 1}>
                        <AccordionTrigger className="text-[#002866] text-lg">
                          {data.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div>
                            <Accordion type="single" collapsible>
                              {data.questions.map((data, index) => (
                                <AccordionItem value={index + 1}>
                                  <AccordionTrigger className="text-[#002866] text-md">
                                    {data.question}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {data.answer}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ))}
              </div>
              <div className="w-full md:w-5/12 lg:w-5/12 flex justify-center">
                <div className="flex justify-center items-center p-2">
                  <div className="w-[380px] px-2">
                    <Card>
                      <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-[#002866]">
                          Have more questions?
                        </CardTitle>
                        <CardDescription>
                          Lets connect to discuss more
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <EnquiryForm />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqCta;
