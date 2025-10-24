"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

const Page = () => {
  const [detailsFeedback, setDetailsFeedback] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    time: new Date().toISOString(),
  });

  // <-- No TypeScript generic here (this is a .jsx file)
  const [status, setStatus] = useState("idle"); // possible values: "idle"|"loading"|"success"|"error"|"used"|"validation-error"
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const data = typeof window !== "undefined" ? localStorage.getItem("contactDetails") : null;
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        const previousTime = new Date(parsedData.time || "");
        if (!isNaN(previousTime.getTime())) {
          const timeDifference = Date.now() - previousTime.getTime();
          const hoursDifference = timeDifference / (1000 * 60 * 60);
          if (hoursDifference < 24) {
            setStatus("used");
            return;
          }
        }
      } catch (err) {
        console.warn("Could not parse contactDetails from localStorage", err);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetailsFeedback((prev) => ({ ...prev, [name]: value }));

    if (status === "validation-error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Rate limit check
    const stored = localStorage.getItem("contactDetails");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const previousTime = new Date(parsed.time || "");
        if (!isNaN(previousTime.getTime())) {
          const hoursDifference = (Date.now() - previousTime.getTime()) / (1000 * 60 * 60);
          if (hoursDifference < 24) {
            setStatus("used");
            return;
          }
        }
      } catch (err) {
        console.warn("Failed to parse stored contactDetails", err);
      }
    }

    // Validation
    if (!detailsFeedback.first_name.trim()) {
      setErrorMessage("First name is required");
      setStatus("validation-error");
      return;
    }
    if (!detailsFeedback.email.trim()) {
      setErrorMessage("Email address is required");
      setStatus("validation-error");
      return;
    }
    if (!detailsFeedback.message.trim()) {
      setErrorMessage("Message is required");
      setStatus("validation-error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(detailsFeedback.email.trim())) {
      setErrorMessage("Please enter a valid email address");
      setStatus("validation-error");
      return;
    }

    setStatus("loading");

    const formData = {
      first_name: detailsFeedback.first_name.trim(),
      last_name: detailsFeedback.last_name.trim(),
      email: detailsFeedback.email.trim(),
      phone: detailsFeedback.phone.trim(),
      message: detailsFeedback.message.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/takeFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // If your API supports CORS and returns JSON, check res.ok.
      // If you're using an opaque/no-cors response, you won't be able to inspect it.
      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      // Store submission time to prevent spam
      localStorage.setItem(
        "contactDetails",
        JSON.stringify({
          ...formData,
          time: new Date().toISOString(),
        })
      );

      setStatus("success");
      setDetailsFeedback({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
        time: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setErrorMessage("Failed to send message. Please try again or contact us directly via email.");
      setStatus("error");
    }
  };

  return (
   <section className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-brand/5 to-brand/10 flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left side - Information */}
        <div className="space-y-8 lg:space-y-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Get in <span className="text-brand">Touch</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to create an impressive resume? We're here to help you
                succeed. Reach out for support, questions, or just to say hello.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-brand/10 rounded-xl">
                <Mail className="w-6 h-6 text-brand" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Email us directly
                </p>
                <Link
                  href="mailto:contact@projectbyme.com"
                  className="text-brand hover:text-brand-hover font-medium transition-colors"
                >
                  contact@projectbyme.com
                </Link>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Customer Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our support team provides quick responses for the best ImpresCV
                experience.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">
                Technical Assistance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get expert help with resume formatting, templates, and technical
                challenges.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">General Inquiries</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Questions about services, pricing, or partnerships? We're here
                to help.
              </p>
            </div>
          </div>
        </div>
        {/* Right side - Form */}
        <div className="w-full">
          {status === "idle" || status === "validation-error" ? (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-brand to-brand p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Send us a message
                </h2>
                <p className="text-white">
                  We'll get back to you within 24 hours
                </p>
              </div>

              <form className="p-6 lg:p-8 space-y-6" onSubmit={handleSubmit}>
                {/* Validation Error Display */}
                {status === "validation-error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-red-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                      <p className="text-sm text-red-700 font-medium">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      First name *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Enter your first name"
                      name="first_name"
                      required
                      onChange={handleChange}
                      value={detailsFeedback.first_name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Enter your last name"
                      name="last_name"
                      onChange={handleChange}
                      value={detailsFeedback.last_name}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      name="email"
                      required
                      onChange={handleChange}
                      value={detailsFeedback.email}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 bg-gray-100 text-gray-600 text-sm rounded-l-xl">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      value={detailsFeedback.phone}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 border border-gray-200 rounded-r-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    rows={4}
                    onChange={handleChange}
                    name="message"
                    required
                    value={detailsFeedback.message}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand to-brand hover:from-brantext-brand-hover hover:to-indigo-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-brand hover:text-brand-hover font-medium underline underline-offset-2"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-brand hover:text-brand-hover font-medium underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          ) : status === "loading" ? (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-brand/10 border-t-brand"></div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Sending your message...
                  </h2>
                  <p className="text-gray-600">
                    Please wait while we process your request.
                  </p>
                </div>
              </div>
            </div>
          ) : status === "success" ? (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Message sent successfully!
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for reaching out. We've received your message and
                    will get back to you within 24 hours.
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand hover:from-brantext-brand-hover hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          ) : status === "error" ? (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Something went wrong
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We couldn't send your message. Please try again or contact
                    us directly via email.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand hover:from-brantext-brand-hover hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Try Again
                  </button>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Message already submitted
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You've already sent us a message in the last 24 hours. We'll
                    get back to you soon!
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand hover:from-brantext-brand-hover hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
