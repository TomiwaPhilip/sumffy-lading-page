"use server";

import { Resend } from "resend";

import { EmailTemplate, EmailTemplate2 } from "@/components/EmailTemplate";
import connectToDB from "./model";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ email }: { email: string; }) {
    await connectToDB();

    try {
        const data = await resend.emails.send({
            from: "Tomiwa-Philip<onboarding@xperiencedtekie.pro>",
            to: [email],
            subject: "Congratulations: Seat Reserved! 🎊",
            react: EmailTemplate({ firstname: "Tekie" }) as React.ReactElement,
        });
        if (!data.error) {
            const response = await resend.contacts.create({
                email: email,
                unsubscribed: false,
                audienceId: 'cce369aa-abda-4095-9b43-c9694e53a27d',
            });
            if (response.data) {
                const data = await resend.emails.send({
                    from: 'Sumffy <onboarding@xperiencedtekie.pro>',
                    to: "tomiwaphilip1100@gmail.com",
                    subject: 'New Subsciber!',
                    react: EmailTemplate2({ email: email }) as React.ReactElement,
                });
                if (!data.error) {
                    return true;
                }
            } else { return false; }
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error saving payment details to DB", error);
        return false;
    }
}