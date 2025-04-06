"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import Docs from "./../public/documents.gif";
import Rent from "./../public/rent.gif";
import Maintenance from "./../public/maintenance.gif";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MenuLinks = [
  {
    name: "Documentation",
    description: [
      "Property Master File",
      "Document Search",
      "Document Updation",
    ],
    icon: Docs,
    height: 30,
    width: 30,
    path: "/services/documentations",
  },
  {
    name: "Lease",
    description: [
      "Potential Tenant Search",
      "Rent Management & Recovery",
      "Customized Rent Agreement",
    ],
    icon: Rent,
    height: 30,
    width: 30,
    path: "/services/lease",
  },
  {
    name: "Maintenance",
    description: [
      "Repairs and maintenance",
      "Upkeep of property",
      "Timely Inspection Visit",
    ],
    icon: Maintenance,
    height: 30,
    width: 30,
    path: "/services/maintenance",
  },
];
const check = (
  <span className="text-green-800">
    <FaCheck />
  </span>
);
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full z-10">
      <nav className="container flex justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className=" p-1 flex items-center pr-4">
            <Image src={logo} width={200} height={80} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12 pl-6">
          <Link
            href="/"
            className="text-md font-regular leading-6 text-gray-900 hover:text-[#dfa459] hover:duration-200">
            Home
          </Link>

          <Popover
            className="relative"
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}>
            <Popover.Button className="!outline-none focus:outline-none flex items-center gap-x-1 text-md font-regular leading-6 text-gray-900 hover:text-[#dfa459] hover:duration-200">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-800"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              show={popoverOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute p-2 border -left-[30rem] top-6 z-10 mt-3 w-[1050px] overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}>
                  <div className="px-6 py-4 flex gap-2 flex-row">
                    {MenuLinks.map((item) => (
                      <div className="w-1/3 border hover:border-[#002866] hover:shadow-md hover:duration-1000 rounded-lg p-4 relative flex items-center ">
                        <div className="flex-left">
                          <div>
                            <Link
                              href={`${item.path}`}
                              className="gap-2 text-xl mb-1 font-medium text-gray-900 flex items-center ">
                              <Image
                                src={item.icon}
                                height={item.height}
                                width={item.width}
                              />
                              {item.name}
                            </Link>
                          </div>
                          <Link
                            href={`${item.path}`}
                            className=" py-1 flex items-center gap-2">
                            <span className="text-sm tracking-wide font-light mt-1 text-gray-600">
                              {item.description.map((data) => (
                                <div className="py-1 border-b border-dashed  ">
                                  <li className=" flex items-center gap-2 rounded-md  list-none text-sm text-gray-600 ">
                                    {check}
                                    {data}
                                  </li>
                                </div>
                              ))}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/about"
            className="text-md font-regular leading-6 text-gray-900 hover:text-[#dfa459] hover:duration-200">
            About
          </Link>
          <Link
            href="/contact"
            className="text-md font-regular leading-6 text-gray-900 hover:text-[#dfa459] hover:duration-200">
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Need Help?
            </Button>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden ease-in-out"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-60" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/"
              className=" p-1 !focus:outline-none flex items-center pr-4">
              <Image src={logo} width={150} height={80} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 px-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 !focus:outline-none  block rounded-lg px-3 py-2 text-md font-regular leading-7 text-gray-900 hover:bg-gray-50">
                  Home
                </Link>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-md font-regular leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[
                          {
                            name: "Documentation",
                            description: [
                              "Property Master File",
                              "Document Search",
                              "Document Updation",
                            ],
                            icon: Docs,
                            height: 30,
                            width: 30,
                            path: "/services/documentations",
                          },
                          {
                            name: "Lease",
                            description: [
                              "Potential Tenant Search",
                              "Rent Management & Recovery",
                              "Customized Rent Agreement",
                            ],
                            icon: Rent,
                            height: 30,
                            width: 30,
                            path: "/services/lease",
                          },
                          {
                            name: "Maintenance",
                            description: [
                              "Repairs and maintenance",
                              "Upkeep of property",
                              "Timely Inspection Visit",
                            ],
                            icon: Maintenance,
                            height: 30,
                            width: 30,
                            path: "/services/maintenance",
                          },
                        ].map((item, index) => (
                          <Disclosure.Button
                            key={index}
                            as="a"
                            onClick={() => setMobileMenuOpen(false)}
                            href={item.path}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <span className="gap-2 text-lg mb-2 font-medium text-gray-900 flex items-center">
                              <Image
                                src={item.icon}
                                height={item.height}
                                width={item.width}
                              />
                              {item.name}
                            </span>
                            <span className="text-sm tracking-wide font-light mt-1 text-gray-600">
                              <Link
                                href={`${item.path}`}
                                className=" py-1 flex items-center gap-2"
                                onClick={() => setMobileMenuOpen(false)}>
                                <span className="text-sm tracking-wide font-light mt-1 text-gray-600">
                                  {item.description.map((data) => (
                                    <div className="py-1 border-b border-dashed  ">
                                      <li className=" flex items-center gap-2 rounded-md  list-none text-sm text-gray-600 ">
                                        {check}
                                        {data}
                                      </li>
                                    </div>
                                  ))}
                                </span>
                              </Link>
                            </span>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-md font-regular leading-7 text-gray-900 hover:bg-gray-50">
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-md font-regular leading-7 text-gray-900 hover:bg-gray-50">
                  Contact
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-4 text-md font-medium leading-7 text-gray-900 hover:bg-gray-50">
                  <span className="text-lg text-[#002866]">
                    <MdCall />
                  </span>
                  +91-9860597996
                </Link>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-4 text-md font-medium leading-7 text-gray-900 hover:bg-gray-50">
                  <span className="text-lg text-[#002866]">
                    <FaWhatsapp />
                  </span>
                  Whatsapp us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
