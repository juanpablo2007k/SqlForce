'use client'

import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <Fade direction='down' duration={1000}>
          <header>
            <div className="m-auto flex items-center justify-center text-center">
              <button className="border-gray-600 border solid rounded-lg p-2 ml-2">sqlforce</button>
              <p style={{ fontFamily: "arial", marginLeft: "2px", opacity: 0.80 }}>
                <strong className="font-bold">Sqlforce </strong> helps understand how to build <strong className="font-bold">tables and projects.</strong> If you want the code, <strong className="font-bold">click here</strong>.
              </p>
              <button onClick={handleClose}>
                <FaTimes size={30} color="white" />
              </button>
            </div>
          </header>
        </Fade>
      )}
    </>
  );
}
