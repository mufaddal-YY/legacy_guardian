"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { EnquirySchema } from "@/lib/validations";
import { createEnquiry } from "@/lib/actions/enquiry.action";
import { useRouter, usePathname } from "next/navigation";

const EnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);

    try {
      await createEnquiry({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
      });
      console.log("Enquiry created successfully");
      form.reset();

      router.push("/");
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      {" "}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-2">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      className="min-h-[48px]"
                      placeholder="First name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className="min-h-[48px]"
                      placeholder="Last name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="min-h-[48px]"
                    placeholder="m@example.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    className="min-h-[48px]"
                    placeholder="+91-0123456789"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="!py-2">
            <Button
              type="submit"
              className="w-full min-h-[48px]"
              disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Enquire Now"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EnquiryForm;
