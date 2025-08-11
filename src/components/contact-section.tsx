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
    <section id="contact" className="py-16 md:py-20 lg:py-28" data-section="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="relative">
          {/* Ambient ring */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_0%,rgba(25,182,243,0.15),transparent_60%)]" />

          <div className="relative rounded-3xl overflow-clip liquid-nav p-6 md:p-8">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s talk</h2>
                  <p className="mt-2 text-foreground/70">New ideas, collaborations, or thoughtful problems to solve.</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href="mailto:mayanksinghal.work@gmail.com" className="text-sm font-medium text-foreground/80 hover:text-foreground">Email</a>
                  <span className="text-foreground/20">/</span>
                  <a href="https://github.com/MynkSinghal" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground/80 hover:text-foreground">GitHub</a>
                  <span className="text-foreground/20">/</span>
                  <a href="https://www.linkedin.com/in/mayanksinghal-" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground/80 hover:text-foreground">LinkedIn</a>
                </div>
              </div>

              <div className="md:col-span-3">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-accent/60"
                          required
                          disabled={isSubmitting}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-accent/60"
                          required
                          disabled={isSubmitting}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can I help?"
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-foreground/10 resize-none focus:outline-none focus:ring-2 focus:ring-accent/60"
                        required
                        disabled={isSubmitting}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl [box-shadow:inset_0_1px_0_rgba(255,255,255,0.6)]" />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-foreground text-white px-6 py-3 rounded-xl font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending…" : "Send message"}
                    </button>
                  </div>

                  {submitStatus === "success" && (
                    <div className="text-green-600 text-sm mt-2">Message sent — I’ll reply soon.</div>
                  )}
                  {submitStatus === "error" && (
                    <div className="text-red-600 text-sm mt-2">Something went wrong. Try again or email me directly.</div>
                  )}
                </form>
                <p className="text-xs text-foreground/60 mt-3">Usually respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
