"use client";
import Image from "next/image";
import { Bounce } from "react-awesome-reveal";

export default function SqlForceDescription() {
  return (
    <section className="overflow-hidden py-8 sm:py-16">
     
        <h1
          id="scrollToSqlForce"
          className="text-4xl font-bold text-center text-gray-300 mb-12"
        >
          SqlForce - Database Management Made Simple
        </h1>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
            <Bounce>

                <h2 className="text-base font-semibold leading-7 text-white">
                  Produce faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                  An Enterprise API for Database Management
                </p>
                <p>
        <span className="text-blue-500">SqlForce</span> is an API designed to simplify and scale your
        <span className="text-green-500"> database management workflow.</span> Connect your databases and
        <span className="text-purple-500"> interact with tables effortlessly, </span>making SQL operations
        <span className="text-orange-500"> easy and efficient.</span>
      </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {/* ... (sección de características existente) ... */}
                </dl>
      </Bounce>

                <div className="mt-10 flex flex-col md:flex-row items-center gap-x-6">

                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Start for free
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-200"
                  >
                    Schedule a demo <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <Image
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/bg-img2.png"
              alt="Product screenshot"
              className="w-full md:w-[24rem] lg:w-[32rem] max-w-none rounded-xl  mx-auto md:mx-0"
              width="2432"
              height="1242"
            />
          </div>
        </div>
    </section>
  );
}
