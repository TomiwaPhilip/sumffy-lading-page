"use server";

import { Resend } from "resend";

import EmailList from "./schema";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function verifyPayment({ email }: { email: string; }) {

    try {
        const data = await resend.emails.send({
            from: "Tomiwa-Philip<onboarding@xperiencedtekie.pro>",
            to: [email],
            subject: "Congratulations: Seat Reserved! 🎊",
            react: EmailTemplate({firstname: "Tekie"}) as React.ReactElement,
        });
        if (!data.error) {
            
        }
        await EmailList.create({ email: email });
        console.log("Payment details saved to the database.");
    } catch (error) {
        console.error("Error saving payment details to DB", error);
        return false;
    }
}