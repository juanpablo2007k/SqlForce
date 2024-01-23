"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faDraftingCompass, faNewspaper, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const services = [
  {
    icon: <FontAwesomeIcon icon={faSitemap} className="text-blue-500" />,
    title: 'Web Development',
    description: (
      <>
        We create attractive and functional websites for your online presence.{' '}
        <span className="text-pink-500">Highlight your brand with us.</span>
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faDraftingCompass} className="text-green-500" />,
    title: 'Frontend Development',
    description: (
      <>
        We develop modern and responsive user interfaces using the latest web technologies.{' '}
        <span className="text-yellow-500">Optimize user experience.</span>
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faNewspaper} className="text-indigo-500" />,
    title: 'Application Development',
    description: (
      <>
        We build robust and scalable web applications to meet your business needs.{' '}
        <span className="text-purple-500">Boost your business with our solutions.</span>
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faFileAlt} className="text-purple-500" />,
    title: 'Technology Consulting',
    description: (
      <>
        We offer consulting services to help you make informed decisions about technology.{' '}
        <span className="text-blue-500">Turn challenges into opportunities.</span>
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="scrollToServiceId" className="relative pt-16 bg-blueGray-50">
      <h1 className="text-white font-bold text-6xl text-center mb-8">Services</h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-500">
              <Image alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" className="w-full align-middle rounded-t-lg" width={700} height={400} />
              <blockquote className="relative p-8 mb-4">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                  <polygon points="-30,95 583,95 583,65" className="text-gray-900 fill-current"></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Boost Your Project with My Freelance Services
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  I am a freelance professional with experience in web development and applications. Highlight your online presence, optimize user experience, and build robust applications. Additionally, I offer technology consulting to help you make informed decisions.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              {services.map((service, index) => (
                <div key={index} className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <Fade cascade={true}>
                      <div className={`p-3  text-4xl text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full ${service.icon.props.className}`}>
                        {service.icon}
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-gray-400">{service.title}</h6>
                      <p className="mb-4 text-blueGray-500">
                        {service.description}
                      </p>
                  </Fade>

                  </div>

                </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
