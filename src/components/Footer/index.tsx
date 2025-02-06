"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/RSM_LOGO(2).png"
                    alt="logo"
                    width={200}
                    height={50}
                    className="h-12 w-[200px] dark:hidden"
                  />
                  <Image
                    src="/images/logo/RSM_LOGO(1).png"
                    alt="logo"
                    width={200}
                    height={50}
                    className="hidden h-12 w-[200px] dark:block"
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  &ldquo;Research is to see what everybody else has seen and to
                  think what nobody else has thought.&rdquo; &mdash; Albert
                  Szent-Györgyi
                </p>
                <div className="flex items-center">
                  <a
                    href="mailto:researchsociety.mit@manipal.edu"
                    aria-label="mail-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/researchsoc?igsh=MWlxamZ6aWxibXp5bQ=="
                    aria-label="instagram-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C15.2 2 16 2.1 17.6 2.2C19.1 2.3 20.1 2.6 20.9 3C21.8 3.5 22.5 4.2 23 5C23.5 5.8 23.8 6.8 23.9 8.4C24 9.2 24 12 24 12C24 12 24 14.8 23.9 16.4C23.8 17.9 23.5 18.9 23 19.7C22.5 20.6 21.8 21.2 21 21.7C20.2 22.1 19.2 22.4 17.6 22.5C16 22.6 15.2 22.7 12 22.7C8.8 22.7 8 22.6 6.4 22.5C4.9 22.4 3.8 22.1 3 21.7C2.2 21.2 1.5 20.5 1 19.7C0.6 18.9 0.2 17.9 0.1 16.4C0 14.8 0 12 0 12C0 12 0 9.2 0.1 7.6C0.2 6.1 0.5 5.1 1 4.3C1.5 3.4 2.2 2.8 3 2.3C3.8 1.9 4.9 1.6 6.4 1.5C8 1.4 8.8 1.3 12 1.3C15.2 1.3 16 1.4 17.6 1.5C19.1 1.6 20.2 1.9 21 2.3C21.8 2.8 22.5 3.4 23 4.3C23.5 5.1 23.8 6.1 23.9 7.6C24 8.4 24 11.2 24 11.2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 5.5C18.5 6.3 17.8 7 17 7C16.2 7 15.5 6.3 15.5 5.5C15.5 4.7 16.2 4 17 4C17.8 4 18.5 4.7 18.5 5.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/research-society/"
                    aria-label="linkedin-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM8.467 17H5.955V9.543H8.467V17ZM7.211 8.414C6.291 8.414 5.543 7.662 5.543 6.746C5.543 5.83 6.291 5.078 7.211 5.078C8.127 5.078 8.879 5.83 8.879 6.746C8.879 7.662 8.127 8.414 7.211 8.414ZM18.467 17H15.955V13.174C15.955 12.146 15.935 10.842 14.545 10.842C13.137 10.842 12.906 11.969 12.906 13.096V17H10.394V9.543H12.8V10.713H12.838C13.195 10.027 14.08 9.3 15.367 9.3C18.049 9.3 18.467 11.116 18.467 12.604V17Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Rest of the component remains the same */}
            {/* Useful Links section */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/teams"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support & Help section */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Designed and developed by{" "}
              <a
                href="https://www.linkedin.com/in/sujanadiga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                SUJAN ADIGA
              </a>
            </p>
          </div>
        </div>

        {/* Background decorative elements remain the same */}
      </footer>
    </>
  );
};

export default Footer;
