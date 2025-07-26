"use client";

import { parseText } from "@/lib/text-parser";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🎯 Form submission started");
    console.log("📝 Form data:", formData);

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("📡 Sending request to /api/contact...");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📨 Response status:", response.status);
      console.log("📨 Response ok:", response.ok);

      if (response.ok) {
        const responseData = await response.json();
        console.log("✅ Success response:", responseData);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const errorData = await response.json();
        console.log("❌ Error response:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("💥 Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      console.log("🏁 Form submission completed");
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-28" data-section="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">🎙️ Let's Vibe</h2>
          <p className="text-muted-foreground mb-10">
            Send a meme, pitch a collab, or just say what's good. I respond to
            everything that's not spam.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name (or alias, I don't judge)"
                className="w-full px-4 py-3 bg-[#f2f2f2] border-none rounded-md focus:ring-1 focus:ring-accent"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@wherever.com"
                className="w-full px-4 py-3 bg-[#f2f2f2] border-none rounded-md focus:ring-1 focus:ring-accent"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="What's on your mind? Project ideas, random thoughts, or just saying hi..."
                rows={5}
                className="w-full px-4 py-3 bg-[#f2f2f2] border-none rounded-md resize-none focus:ring-1 focus:ring-accent"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "⏳ Sending..." : "⚡ Hit me up"}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="text-green-600 text-sm mt-2">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-600 text-sm mt-2">
                ❌ Something went wrong. Please try again or reach out directly.
              </div>
            )}
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            {parseText("<italic>Usually respond within 24 hours</italic>")}
          </p>
        </div>
      </div>
    </section>
  );
}
