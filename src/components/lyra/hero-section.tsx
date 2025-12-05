"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { playfairDisplay, ppNeueMontreal } from "@/app/fonts";
import { waitlistSchema } from "@/actions/schema";
import { joinWaitlistAction } from "@/actions/waitlist-action";
import { cn } from "@/lib/utils";

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await joinWaitlistAction(data);

      if (result?.data?.success) {
        setIsSuccess(true);
        form.reset();
      } else if (result?.data?.alreadyExists) {
        alert(result.data.message || "You're already on the waitlist!");
      } else {
        alert("Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4 pt-16 md:px-8 md:pt-24">
      {/* Logo */}
      <div className="mb-4 md:mb-8">
        <Image
          src="/lyra-logo.svg"
          alt="Lyra"
          width={200}
          height={200}
          className="h-[120px] w-40 md:h-[100px] md:w-[200px]"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl text-center">
        {/* Headline */}
        <h2
          className={cn(
            "mb-4 font-medium leading-tight tracking-tight text-black md:mb-8 text-[18px] md:text-[28px] lg:text-[36px]",
            playfairDisplay.className
          )}
        >
          Your AI teammate that takes care of customer conversations, freeing your team to focus
          on delivering product value.
        </h2>

        {/* Body Text */}
        <p
          className={cn(
            "mb-6 font-medium leading-relaxed tracking-tight text-black md:mb-10 text-[14px] md:text-xl lg:text-xl",
            playfairDisplay.className
          )}
        >
          No more burning hours on customer conversations across email, chat, SMS, and every
          messaging app. Lyra delivers fast, high-quality customer experience in your brand
          voice: automating up to 95% of conversations, 24/7. Plus a unified platform to view all
          conversations in one place. Your team stays focused on complex issues and growth.
        </p>

        {/* Email Form / Success Message */}
        {isSuccess ? (
          <div className="mx-auto mb-4 max-w-2xl">
            <p className={cn("text-lg font-medium text-black md:text-xl", playfairDisplay.className)}>
              Thank you! You've been added to the waitlist.
            </p>
          </div>
        ) : (
          <>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mx-auto mb-4 flex max-w-2xl flex-row items-center gap-2 md:gap-4"
            >
              <input
                type="email"
                placeholder="Your email address"
                {...form.register("email")}
                disabled={isSubmitting}
                className={cn(
                  "h-9 w-full flex-1 rounded-full bg-white px-4 text-sm text-gray-800 transition-all md:h-12 md:px-5 md:text-base",
                  "placeholder:text-gray-500 placeholder:text-xs  md:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black/20",
                  "disabled:cursor-not-allowed disabled:opacity-50"
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "h-9 shrink-0 rounded-full bg-black px-4 text-xs text-white tracking-tight hover:bg-black/90 md:h-12 md:px-6 md:text-base",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                  ppNeueMontreal.className
                )}
              >
                {isSubmitting ? "Reserving..." : "Reserve Your Spot"}
              </Button>
            </form>

            {form.formState.errors.email && (
              <p className="mb-3 text-sm text-red-600">{form.formState.errors.email.message}</p>
            )}
          </>
        )}

        {/* Footer Text */}
        <p className={cn("text-xs font-light tracking-tight text-black/80 md:text-base", playfairDisplay.className)}>
          We're onboarding just 20 businesses in January 2026.
        </p>
      </div>
    </div>
  );
}
