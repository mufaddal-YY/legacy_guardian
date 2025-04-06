import * as z from "zod";

export const EnquirySchema = z.object({
  firstname: z.string().min(3).max(30),
  lastname: z.string().min(3).max(30),
  email: z.string().email(),
  phone: z.string().min(3).max(30),
});
