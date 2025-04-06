"use server";

import Enquiry from "../models/enquiry.model";
import { connectToDatabase } from "../db";

export async function createEnquiry(params) {
  try {
    await connectToDatabase();
    const { firstname, lastname, email, phone } = params;
    const enquiry = await Enquiry.create({
      firstname,
      lastname,
      email,
      phone,
    });
    return enquiry;
  } catch (error) {
    console.error("Error creating enquiry:", error);
    throw error;
  }
}
