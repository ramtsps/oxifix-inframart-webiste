import React, { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import ReCAPTCHA from "react-google-recaptcha";
import {
  ArrowRight,
  X,
} from "lucide-react";
import constructionImage from "@/assets/contact.jpg";
import HeroSection from "@/components/HeroSection";
import phoneIcon from "@/assets/icons/phone.png";
import mailIcon from "@/assets/icons/email.png";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // API Configuration - Make sure this matches your backend
  // const API_URL = "http://localhost:3000/api/contact";
  // const API_TOKEN = "your-secret-api-token-here";
  // const RECAPTCHA_SITE_KEY = "6LcBmhosAAAAACDLyvBBo9-JwsHlMaPBPaSjPrOL";

  const API_URL = import.meta.env.VITE_API_URL;
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // reCAPTCHA Configuration - Replace with your actual site key

  // Mobile number validation function
  const validateMobileNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, '');
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(cleanPhone);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/[^\d+\-()\s]/g, '');
    setFormData((prev) => ({
      ...prev,
      phone: cleanedValue,
    }));
    if (error) setError("");
  };

  // reCAPTCHA handlers
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    if (error && error.includes("reCAPTCHA")) {
      setError("");
    }
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken(null);
    setError("reCAPTCHA verification failed. Please try again.");
  };

  const resetRecaptcha = () => {
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Basic client-side validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Mobile number validation
    if (!validateMobileNumber(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number");
      setIsSubmitting(false);
      return;
    }

    // Terms acceptance validation
    if (!acceptTerms) {
      setError("Please accept the terms and conditions to proceed");
      setIsSubmitting(false);
      return;
    }

    // reCAPTCHA validation
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Environment Variables:", {
        API_URL: API_URL,
        API_TOKEN: API_TOKEN ? "Present" : "Missing",
        RECAPTCHA_SITE_KEY: RECAPTCHA_SITE_KEY ? "Present" : "Missing"
      });
      console.log("reCAPTCHA Token:", recaptchaToken);
      console.log("Form Data:", formData);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          isNewsletter: false,
          recaptchaToken: recaptchaToken
        }),
      });

      console.log("Response status:", response.status);

      const result = await response.json();
      console.log("Response data:", result);

      if (!response.ok) {
        // Reset reCAPTCHA on error
        resetRecaptcha();

        if (result.message?.includes("reCAPTCHA") || result.message?.includes("robot")) {
          throw new Error("reCAPTCHA verification failed. Please try again.");
        }

        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      if (result.success) {
        setShowSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setAcceptTerms(false);
        resetRecaptcha();
      } else {
        resetRecaptcha();
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "There was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#f4f4f5]">
        <Navigation />
        <HeroSection
          backgroundImage={constructionImage}
          title="Get in Touch"
          subtitle=" We're here to help. Reach out for expert advice, quotes, or any questions about your project."
          minHeight="min-h-[70vh]"
          overlayOpacity={0.6}
          animate={true}
        />

        <section className="py-12 sm:py-16 lg:py-24 px-4 bg-[#f4f4f5]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <p
              className="text-primary font-normal tracking-wider text-xs sm:text-sm flex items-center justify-center xl:justify-start gap-2 mb-3 sm:mb-4"
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-delay="200"
            >
              <span className="w-6 sm:w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>
              {showSuccess ? "THANK YOU" : "LET'S CONNECT"}
            </p>

            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 sm:gap-12 xl:gap-16">
              {/* Contact Form - Left Side */}
              <div
                className="space-y-6 sm:space-y-8 w-full xl:max-w-2xl"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <div className="text-center xl:text-left">
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    {showSuccess
                      ? ""
                      : "We'd Love To Hear From You."}
                  </h2>
                </div>

                {showSuccess ? (
                  // Success Message Content
                  <div
                    className="text-center xl:text-left space-y-6"
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-delay="400"
                  >
                    {/* Checkmark Icon */}
                    <div className="flex justify-center xl:justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-bounce">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                        Thank You for Reaching Out!
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        We've received your message and will get back to you
                        within 24 hours.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Our team will contact you shortly with more
                        information.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-1 justify-center sm:justify-center">
                      <Button
                        variant="outline"
                        onClick={() => setShowSuccess(false)}
                        className="flex items-center rounded-full bg-[#9b9b9b] text-white hover:text-white hover:bg-[#9b9b9b] font-medium px-6 py-3 relative transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 w-fit mx-auto sm:mx-0"
                      >
                        <X className="w-4 h-4" />
                        <span className="ml-2 text-sm sm:text-base">Close</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Original Form Content
                  <form
                    className="space-y-4 sm:space-y-6 w-full"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="400"
                    onSubmit={handleSubmit}
                  >
                    {/* Error Message */}
                    {error && (
                      <div
                        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                        data-aos="fade-up"
                        data-aos-duration="400"
                      >
                        <p className="text-sm">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div
                        className="w-full"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="500"
                      >
                        <Input
                          name="firstName"
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-200 hover:border-primary focus:border-primary"
                        />
                      </div>
                      <div
                        className="w-full"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="550"
                      >
                        <Input
                          name="lastName"
                          placeholder="Last Name *"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-200 hover:border-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div
                        className="w-full"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="600"
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-200 hover:border-primary focus:border-primary"
                        />
                      </div>
                      <div
                        className="w-full"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="650"
                      >
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          required
                          disabled={isSubmitting}
                          className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-200 hover:border-primary focus:border-primary"
                        />
                        {formData.phone && !validateMobileNumber(formData.phone) && (
                          <p className="text-xs text-red-500 mt-1 ml-1">
                            Please enter a valid 10-digit mobile number
                          </p>
                        )}
                      </div>
                    </div>

                    <div
                      className="w-full"
                      data-aos="zoom-in"
                      data-aos-duration="400"
                      data-aos-delay="700"
                    >
                      <Textarea
                        name="message"
                        placeholder="Message *"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        rows={4}
                        className="bg-white border-border resize-none w-full transition-all duration-200 hover:border-primary focus:border-primary min-h-[120px] sm:min-h-[150px]"
                      />
                    </div>



                    {/* Terms and Conditions Checkbox */}
                    <div
                      className="flex items-start space-x-2 pt-1"
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay="800"
                    >
                      <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                        disabled={isSubmitting}
                        className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        I agree to the{" "}
                        <a
                          href="/terms"
                          className="text-primary hover:underline font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy"
                          className="text-primary hover:underline font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>. I consent to Oxifix Inframart contacting me via the provided contact details.
                      </label>
                    </div>
                    {/* reCAPTCHA Section */}
                    <div
                      className="pt-0.5"
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay="750"
                    >
                      <div className="flex justify-start">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={handleRecaptchaChange}
                          onExpired={handleRecaptchaExpired}
                          onErrored={handleRecaptchaError}
                          theme="light"
                          size="normal"
                        />
                      </div>
                      {!recaptchaToken && formData.firstName && formData.lastName && formData.email && formData.phone && formData.message && (
                        <p className="text-xs text-amber-600 text-left mt-2">
                          Please complete the reCAPTCHA verification
                        </p>
                      )}
                    </div>
                    <div
                      className="flex justify-start xl:justify-start pt-2"
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay="850"
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting || !recaptchaToken}
                        className="flex items-center rounded-full bg-primary text-white font-medium px-4 py-2 sm:px-6 sm:py-3 relative transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="pr-2 sm:pr-3 text-sm sm:text-base">
                          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                        </span>
                        <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black -mr-1 transition-all duration-200 hover:bg-gray-800">
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Info - Right Side */}
              <div
                className="space-y-6 sm:space-y-8 w-full xl:max-w-md lg:max-w-sm"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center xl:text-left"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Contact Info
                </h3>

                <div className="space-y-4 sm:space-y-6 ">
                  <div
                    className="flex items-sta gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2 "
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                      <img
                        src={phoneIcon}
                        alt="Phone Icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <a
                        href="tel:+919443900246"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                      >
                        +91 94439 00246
                      </a>
                      <a
                        href="tel:+918428002244"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                      >
                        +91 84280 02244
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2"
                    data-aos="fade-left"
                    data-aos-delay="700"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                      <img
                        src={mailIcon}
                        alt="Mail Icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <a
                        href="mailto:sales@oxifixinframart.com"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4 break-all"
                      >
                        sales@oxifixinframart.com
                      </a>
                      <a
                        href="mailto:customer@oxifixinframart.com"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4 break-all"
                      >
                        customer@oxifixinframart.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>



              {/* <div
                className="space-y-6 sm:space-y-8 w-full xl:max-w-md lg:max-w-sm"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center xl:text-left"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Contact Info
                </h3>

                <div className="space-y-4 sm:space-y-6 flex flex-col items-center xl:items-start">
                  <div
                    className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2 w-full max-w-xs xl:max-w-none"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                      <img
                        src={phoneIcon}
                        alt="Phone Icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      />
                    </div>
                    <div className="flex-1 space-y-1 text-center xl:text-left">
                      <a
                        href="tel:+919443900246"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                      >
                        +91 94439 00246
                      </a>
                      <a
                        href="tel:+918428002244"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                      >
                        +91 84280 02244
                      </a>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2 w-full max-w-xs xl:max-w-none"
                    data-aos="fade-left"
                    data-aos-delay="700"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                      <img
                        src={mailIcon}
                        alt="Mail Icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      />
                    </div>
                    <div className="flex-1 space-y-1 text-center xl:text-left">
                      <a
                        href="mailto:sales@oxifixinframart.com"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4 break-all"
                      >
                        sales@oxifixinframart.com
                      </a>
                      <a
                        href="mailto:customer@oxifixinframart.com"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4 break-all"
                      >
                        customer@oxifixinframart.com
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className=" px-4 bg-[#f4f4f5]">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-muted rounded-2xl  h-96 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.718419324697!2d78.4746462748773!3d12.06288478817518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac65000690208d%3A0x32848114aec6d836!2sOxifix%20Inframart!5e0!3m2!1sen!2sin!4v1764217798364!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </section>

        <Brands showTopBanner={true} showBottomBanner={false} />
      </div>
      <Footer />
    </>
  );
};

export default Contact;