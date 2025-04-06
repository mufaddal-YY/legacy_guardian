"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../public/logo_w.svg";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <section className="py-4 bg-[#002866]">
      <div className="max-w-7xl mx-auto px-8 text-white">
        <div className="flex flex-wrap flex-col justify-between md:flex-row lg:flex-row p-4">
          <div className=" flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="">
              <Link href={"/"} className="flex items-center">
                <Image width={150} height={50} src={Logo} />
              </Link>
            </div>
            <div className="py-2">
              <ul className="flex flex-row gap-4">
                <li className="text-sm  p-2">
                  <strong>Acecube Legacy Guardians Pvt. Ltd.</strong> <br />
                  Shop No 3 and 4, M K, Chowk, Krushnai Building, near HDFC
                  Bank, Sant Tukaram Nagar, New Sangavi, Pune, Pimpri-Chinchwad,
                  Maharashtra 411027
                </li>
              </ul>
              <Link href={`tel:9130067006`} className="flex gap-2 py-2">
                <span className="text-xl">
                  <FaWhatsapp />
                </span>
                +91-91 3006 7006
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 w-[150px] border-b-[1px] border-gray-400">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Useful Links
              </h3>
            </div>
            <div className="py-2">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={"/"}>About</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/"}>Documentations</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/"}>Lease</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/"}>Maintenance</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="mb-2 border-b-[1px] border-gray-400 w-[100px]">
              <h3 className="text-[18px] uppercase md:text-md font-semibold mb-4">
                Utility
              </h3>
            </div>
            <div className="py-2">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="text-md capitalize">
                  <Link href={"/"}>Service Policy</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/"}>Terms and Conditions</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/"}>Refund Policy</Link>
                </li>
                <li className="text-md capitalize">
                  <Link href={"/"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gap-2 mb-4 w-full md:w-1/2 lg:w-1/4 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8117338216202!2d73.8116138!3d18.582524600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9af67a0eafd%3A0xf5b153c4d11825ca!2sAcecube%20Legacy%20Guardians%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740892021934!5m2!1sen!2sin"
              width="300"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <hr />
        <div className="py-2 text-center font-regular items-center text-md ">
          <span>© 2025 Legacy Guardians. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
