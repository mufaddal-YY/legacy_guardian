import EnquiryForm from "@/components/EnquiryForm";
import PageBanner from "@/components/PageBanner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  return (
    <>
      <PageBanner heading="Contact Us" />

      <section className="py-[80px] bg-white flex items-center justify-center">
        <div className="container">
          <div className="flex flex-col md:flex-row lg:flex-row">
            <div className="p-2 w-full md:w-2/3 lg:w-7/12 mb-4">
              <div className="w-full flex justify-center">
                <div className="flex justify-center items-center p-2">
                  <div className="w-full px-2">
                    <Card>
                      <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-[#002866]">
                          Get in touch with us
                        </CardTitle>
                        <CardDescription>
                          Lets connect to discuss more
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <EnquiryForm />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 w-full md:w-1/3 flex justify-center lg:w-5/12 order-2 sm:order-1 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8117338216202!2d73.8116138!3d18.582524600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9af67a0eafd%3A0xf5b153c4d11825ca!2sAcecube%20Legacy%20Guardians%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740892021934!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
