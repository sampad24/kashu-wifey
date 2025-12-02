import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import mongoose from "mongoose";
export async function POST(request) {
    try {
        const { name, number, email, message } = await request.json();

        // Validate required fields and create detailed error messages
    const missingFields = [];
    if (!name) missingFields.push("Name");
    if (!number) missingFields.push("Phone Number");
    if (!email) missingFields.push("Email");
    if (!message) missingFields.push("Message");

        if (missingFields.length > 0) {
            return new Response(
                JSON.stringify({
                    error: "validation_failed",
                    details: missingFields,
                    msg: [`Missing required fields: ${missingFields.join(", ")}`],
                    success: false
                }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({
                    error: "validation_failed",
                    details: ["email"],
                    msg: ["Please enter a valid email address"],
                    success: false
                }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        try {
            await connectDB();
            console.log("Connected to database successfully");
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            throw new Error("Database connection failed");
        }

        // Create contact data with all required fields
        const contactData = {
            name,
            number,
            email,
            message,
        };

        console.log("Contact data:", contactData);

        const newContact = await Contact.create(contactData);

        console.log("Contact created successfully:", newContact);

        return new Response(
            JSON.stringify({ 
                msg: ["Form submitted successfully!"], 
                success: true 
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );

    } catch (error) {
    console.error("Error processing form submission:", error);

    if (error instanceof mongoose.Error.ValidationError) {
        let errorList = [];
        for (let field in error.errors) {
            errorList.push(error.errors[field].message);
        }
        return new Response(
            JSON.stringify({
                msg: errorList,
                success: false
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            }
        );
    }

    return new Response(
        JSON.stringify({
            msg: [
                "An error occurred while submitting the form.",
                error.message || "Unknown server error"
            ],
            success: false
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        }
    );
}
}
