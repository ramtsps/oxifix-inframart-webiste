import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import constructionImage from "@/assets/construction-site.jpg";
import HeroSection from "@/components/HeroSection";
import phoneIcon from "@/assets/icons/phone.png";
import mailIcon from "@/assets/icons/email.png";
import locationIcon from "@/assets/icons/pin.png";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

const Contact = () => {
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

        {/* Contact Form and Info Section */}
        <section className="py-12 sm:py-16 lg:py-24 px-4 bg-[#f4f4f5]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 sm:gap-12 xl:gap-16">
              {/* Contact Form - Left Side */}
              <div
                className="space-y-6 sm:space-y-8 w-full xl:max-w-2xl"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="text-center xl:text-left">
                  <p
                    className="text-primary font-normal tracking-wider text-xs sm:text-sm flex items-center justify-center xl:justify-start gap-2 mb-3 sm:mb-4"
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    <span className="w-6 sm:w-8 lg:w-12 h-0.5 bg-white bg-dotted"></span>
                    LET'S CONNECT
                  </p>
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    We Are Here To Hear From You
                  </h2>
                </div>

                <form
                  className="space-y-4 sm:space-y-6 w-full"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div
                      className="w-full"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <Input
                        placeholder="First Name"
                        className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-300 hover:border-primary focus:border-primary"
                      />
                    </div>
                    <div
                      className="w-full"
                      data-aos="zoom-in"
                      data-aos-delay="650"
                    >
                      <Input
                        placeholder="Last Name"
                        className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-300 hover:border-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div
                      className="w-full"
                      data-aos="zoom-in"
                      data-aos-delay="700"
                    >
                      <Input
                        type="email"
                        placeholder="Email"
                        className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-300 hover:border-primary focus:border-primary"
                      />
                    </div>
                    <div
                      className="w-full"
                      data-aos="zoom-in"
                      data-aos-delay="750"
                    >
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        className="h-10 sm:h-12 bg-white border-border w-full transition-all duration-300 hover:border-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div
                    className="w-full"
                    data-aos="zoom-in"
                    data-aos-delay="800"
                  >
                    <Textarea
                      placeholder="Message"
                      rows={4}
                      className="bg-white border-border resize-none w-full transition-all duration-300 hover:border-primary focus:border-primary min-h-[120px] sm:min-h-[150px]"
                    />
                  </div>

                  <div
                    className="flex justify-center xl:justify-start"
                    data-aos="fade-up"
                    data-aos-delay="850"
                  >
                    <button className="flex items-center rounded-full bg-primary text-white font-medium px-5 py-2 sm:px-6 sm:py-3 relative transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                      <span className="pr-2 sm:pr-3 text-sm sm:text-base">
                        SEND MESSAGE
                      </span>
                      <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black -mr-1 transition-all duration-300 hover:bg-gray-800">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </span>
                    </button>
                  </div>
                </form>
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
