import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ShoppingBag,
  MessageCircle,
  X,
} from "lucide-react";
import constructionImage from "@/assets/construction-site.jpg";
import HeroSection from "@/components/HeroSection";
import phoneIcon from "@/assets/icons/phone.png";
import mailIcon from "@/assets/icons/email.png";
import locationIcon from "@/assets/icons/pin.png";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide success message after 5 seconds
    } catch (error) {
      console.error("Form submission error:", error);
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
          title="Contact Us"
          subtitle="We Sell Best in class Construction Materials at affordable price with a wide range of collections."
          minHeight="min-h-[80vh]"
          overlayOpacity={0.6}
          animate={true}
        />

        <section className="py-12 sm:py-16 lg:py-24 px-4 bg-[#f4f4f5]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 sm:gap-12 xl:gap-16">
              {/* Contact Form - Left Side */}
              <div
                className="space-y-6 sm:space-y-8 w-full xl:max-w-2xl"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <div className="text-center xl:text-left">
                  <p
                    className="text-primary font-normal tracking-wider text-xs sm:text-sm flex items-center justify-center xl:justify-start gap-2 mb-3 sm:mb-4"
                    data-aos="fade-down"
                    data-aos-duration="400"
                    data-aos-delay="200"
                  >
                    <span className="w-6 sm:w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>
                    {showSuccess ? "THANK YOU" : "LET'S CONNECT"}
                  </p>
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    {showSuccess
                      ? "Message Sent Successfully!"
                      : "We Are Here To Hear From You"}
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
                    <div className="flex justify-center xl:justify-start">
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

                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                        Thank You for Reaching Out!
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        We've received your message and will get back to you
                        within 24 hours.
                      </p>
                      <div className="pt-2">
                        <p className="text-sm text-muted-foreground">
                          Our team will contact you shortly with more
                          information.
                        </p>
                      </div>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div
                        className="w-full"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="500"
                      >
                        <Input
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
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
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
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
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
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
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-200 hover:border-primary focus:border-primary"
                        />
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
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="bg-white border-border resize-none w-full transition-all duration-200 hover:border-primary focus:border-primary min-h-[120px] sm:min-h-[150px]"
                      />
                    </div>

                    <div
                      className="flex justify-start xl:justify-start"
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay="750"
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
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

                <div className="space-y-4 sm:space-y-6">
                  <div
                    className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2"
                    data-aos="fade-left"
                    data-aos-delay="500"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                      <img
                        src={locationIcon}
                        alt="Location Icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <a
                        href="https://maps.app.goo.gl/9xi23SmDJq3C79mh6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-bold text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                      >
                        OXIFIX INFRAMART
                      </a>
                      <p className="text-foreground font-medium text-sm sm:text-base">
                        1/120, Mookkareddipptty, Pallipatti,
                      </p>
                      <p className="text-foreground font-medium text-sm sm:text-base">
                        Tamil Nadu 636905
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2"
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
                        href="tel:+919943543040"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                      >
                        +91 99435 43040
                      </a>
                      <a
                        href="tel:+919943543042"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4"
                      >
                        +91 99435 43042
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
                        href="mailto:info@oxifixinframart.com"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4 break-all"
                      >
                        info@oxifixinframart.com
                      </a>
                      <a
                        href="mailto:investor@oxifixinframart.com"
                        className="text-foreground font-medium text-sm sm:text-base block transition-all duration-300 hover:text-primary hover:underline underline-offset-4 break-all"
                      >
                        investor@oxifixinframart.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className=" px-4 bg-[#f4f4f5]">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-muted rounded-2xl  h-96 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840278.6728891336!2d77.63777889317029!3d11.948145041629047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b095f8436424c05%3A0xeb9dc28c8702c6fe!2sOXIFIX%20INFRAMART!5e0!3m2!1sen!2sin!4v1759479313272!5m2!1sen!2sin"
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
