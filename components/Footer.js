// import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

export default function Footer (){
    return (
        <div className="mx-10 justify-between px-4 py-4 space-y-8 border-2 border-[#007aff] md:flex-row md:space-y-0">
          
          <div className="flex flex-col items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          
              <div className="flex flex-col space-y-2">
                <div className="flex">
                <input
                  type="text"
                  className="px-4 py-4 mx-0  text-[#091A3D] focus:outline-none"
                  placeholder="Get updates in your inbox"
                />
                </div>
               <div className="">
               <button
                  className="px-6 py-2 text-[#091A3D] bg-[#1CE7C2] hover:bg-white focus:outline-none"
                >
                  Go
                </button>
               </div>
               
              </div>
          
            {/* <div>
              <img src="./img/logo-white.svg" className="h-8" alt="" />
            </div>
            
            <div className="flex justify-center space-x-4">
              
              <a href="#">
                <img src="./img/icon-facebook.svg" alt="" className="h-8" />
              </a>
              
              <a href="#">
                <img src="img/icon-youtube.svg" alt="" className="h-8" />
              </a>
              
              <a href="#">
                <img src="img/icon-twitter.svg" alt="" className="h-8" />
              </a>
              <a href="#">
                <img src="img/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              
              <a href="#">
                <img src="img/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div> */}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col space-y-4 text-white">
              <a href="#" className="hover:text-brightRed">Home</a>
              <a href="#" className="hover:text-brightRed">Jobs</a>
              <a href="#" className="hover:text-brightRed">Hire Talent</a>
              <a href="#" className="hover:text-brightRed">Blog</a>
              <a href="#" className="hover:text-brightRed">Book a Call with Me</a>
              <a href="#" className="hover:text-brightRed">About s</a>
            </div>
          </div>
  
          <div className="flex  justify-center">
            { <div className=" text-white">
              Copyright &copy; 2023, All Rights Reserved
            </div> }
          </div>
        </div>
    )
}