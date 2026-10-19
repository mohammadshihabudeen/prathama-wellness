"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle, Phone } from "lucide-react";
import { VERIFIED_SERVICES, WELLNESS_PROGRAMS, BUSINESS_INFO } from "@/data/retreat-data";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s\-()]+$/, "Please enter a valid phone number format"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service or consultation"),
  preferredDate: z.string().optional().or(z.literal("")),
  participants: z.string().optional().or(z.literal("")),
  message: z.string().min(5, "Please enter at least a few words describing your health query"),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

interface EnquiryFormProps {
  preselectedService?: string;
  compact?: boolean;
  className?: string;
}

export default function EnquiryForm({
  preselectedService,
  compact = false,
  className = "",
}: EnquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    message: string;
    referenceId: string;
    whatsappUrl: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: preselectedService || "",
      preferredDate: "",
      participants: "1 Person",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to submit enquiry. Please try again.");
      }

      setSuccessData(json);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("An unexpected error occurred. Please call or WhatsApp us directly.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-[#c5a059]/20 p-6 sm:p-8 ${className}`}
      id="enquiry-form-card"
    >
      {successData ? (
        <div className="text-center py-6 space-y-5 animate-fadeIn">
          <div className="w-16 h-16 bg-[#17382b]/10 text-[#17382b] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-[#1e4a39]" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#10261d]">
              Enquiry Submitted Successfully
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              {successData.message}
            </p>
            <p className="text-xs font-mono bg-stone-100 text-stone-700 py-1 px-3 rounded-full inline-block">
              Reference: {successData.referenceId}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={successData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp for Immediate Confirmation</span>
            </a>
            <button
              type="button"
              onClick={() => setSuccessData(null)}
              className="w-full sm:w-auto text-xs text-stone-500 hover:text-stone-800 underline py-2"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot field for bot suppression */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("honeypot")}
            />
          </div>

          {serverError && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <span>{serverError}</span>
                <p className="mt-1">
                  You can also WhatsApp us directly at{" "}
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                    className="underline font-bold"
                  >
                    {BUSINESS_INFO.displayPhone}
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Senthil Nathan"
                {...register("fullName")}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#17382b] transition-all ${
                  errors.fullName ? "border-red-400 bg-red-50/20" : "border-stone-300 bg-stone-50/50"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                {...register("phone")}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#17382b] transition-all ${
                  errors.phone ? "border-red-400 bg-red-50/20" : "border-stone-300 bg-stone-50/50"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                Email Address <span className="text-stone-400 text-[11px] normal-case">(Optional)</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#17382b] transition-all"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Service of Interest */}
            <div>
              <label
                htmlFor="service"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                Service / Consultation <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                {...register("service")}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#17382b] transition-all ${
                  errors.service ? "border-red-400 bg-red-50/20" : "border-stone-300 bg-stone-50/50"
                }`}
              >
                <option value="">Select a Treatment or Program</option>
                <optgroup label="Core Kalari & Marma Therapies">
                  {VERIFIED_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Wellness Retreat Programs">
                  {WELLNESS_PROGRAMS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.duration})
                    </option>
                  ))}
                </optgroup>
                <option value="General Health Consultation">General Practitioner Consultation</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>
              )}
            </div>
          </div>

          {!compact && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
                >
                  Preferred Date <span className="text-stone-400 text-[11px] normal-case">(Optional)</span>
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  {...register("preferredDate")}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#17382b] transition-all"
                />
              </div>

              {/* Number of Participants */}
              <div>
                <label
                  htmlFor="participants"
                  className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
                >
                  Participants
                </label>
                <select
                  id="participants"
                  {...register("participants")}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#17382b] transition-all"
                >
                  <option value="1 Person">1 Person</option>
                  <option value="2 Persons (Couple / Friends)">2 Persons (Couple / Friends)</option>
                  <option value="Family / Small Group (3+)">Family / Small Group (3+)</option>
                </select>
              </div>
            </div>
          )}

          {/* Details / Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
            >
              Your Health Query or Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={compact ? 3 : 4}
              placeholder="Please describe your health objective, chronic pain, preferred days, or any questions for our practitioners..."
              {...register("message")}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#17382b] transition-all ${
                errors.message ? "border-red-400 bg-red-50/20" : "border-stone-300 bg-stone-50/50"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#17382b] hover:bg-[#10261d] text-[#d6b573] py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#d6b573]" />
                  <span>Submitting Your Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#c5a059]" />
                  <span>Send Consultation Enquiry</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-stone-500 text-center pt-2">
            We value your privacy. Your information is securely handled and used solely to coordinate your consultation at Prathama Kalari Retreat.
          </p>
        </form>
      )}
    </div>
  );
}
