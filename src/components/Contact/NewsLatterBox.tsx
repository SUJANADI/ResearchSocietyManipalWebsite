"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "newsletter",
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Sign up to stay informed about our latest news, exclusive updates, and
        upcoming features delivered straight to your inbox.
      </p>
      {status === "success" && (
        <div className="mb-4 text-green-600">Subscribed successfully!</div>
      )}
      {status === "error" && (
        <div className="mb-4 text-red-600">
          Failed to subscribe. Please try again.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-primary/80 disabled:opacity-70"
        >
          {status === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default NewsLatterBox;
