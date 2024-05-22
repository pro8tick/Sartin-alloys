import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoMailSharp, IoCall } from "react-icons/io5";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <div className="-mt-[100vh]">
      <div className="w-full h-[100vh]"></div>
      <Footer container className="flex flex-col bg-[#e0f0d6]  relative -z-1">
        <div className="w-full  mx-auto ">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link to="/" className="self-center whitespace-nowrap">
                <img
                  src="/logo-main.svg"
                  alt="Sartin Alloys"
                  className={`w-[20rem]  h-auto ml-7`}
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col className="text-black">
                  <Footer.Link
                    href="https://64c3a187d4eb2d61ce15f705--lustrous-croquembouche-cf331a.netlify.app/#about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developer
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sartin Alloys
                  </Footer.Link>
                  <Footer.Title title="Info" />
                  <Footer.LinkGroup col className="text-black">
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Contact Us" />
                <Footer.LinkGroup col className="text-black">
                  <div className="font-sans   border-gray-300 rounded-lg max-w-md">
                    <p className="font-bold">Corporate Office:</p>
                    <p>Sartin Alloys Pvt. Ltd.</p>
                    <p>
                      S2/40, Sector-A, Zone-A
                      <br />
                      Mancheswar Industrial Estate,
                      <br />
                      Bhubaneswar-751010, Odisha, India
                    </p>
                    <p className="flex justify-start gap-1">
                      <IoMailSharp className="size-5 text-green-600" />{" "}
                      <span className="text-blue-500">
                        info@sartinalloys.com
                      </span>
                    </p>
                    <p className="flex justify-start gap-1">
                      <IoCall className="size-5 text-green-600" />{" "}
                      <span className="text-blue-500">+91-xxxx-xxxxxx</span>
                    </p>
                  </div>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.LinkGroup col className="text-black mt-10">
                  <div className="font-sans   border-gray-300 rounded-lg max-w-md">
                    <p className="font-bold">Factory Address:</p>
                    <p>Choudwar Industrial Estate,</p>
                    <p>Cuttack-754027, Odisha, India</p>
                    <p className="flex justify-start gap-1">
                      <IoMailSharp className="size-5 text-green-600" />{" "}
                      <span className="text-blue-500">
                        factory@sartinalloys.com
                      </span>
                    </p>
                    <p className="flex justify-start gap-1">
                      <IoCall className="size-5 text-green-600" />{" "}
                      <span className="text-blue-500">+91-xxxx-xxxxxx</span>
                    </p>
                  </div>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider className="border border-[#0000009f]" />
          <div className="w-full sm:items-center">
            <Footer.Copyright
              href="#"
              by="Sartin Alloys, All Rights Reserved."
              year={new Date().getFullYear()}
            />
          </div>
        </div>
      </Footer>
    </div>
  );
}
