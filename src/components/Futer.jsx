import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Futer = () => {
  return (
    <div className="bg-linear-to-b from-[#1A1A1A] to-[#0F0F0F] text-gray-400 mt-24">
      <div className="px-6 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
              <span className="px-2 py-1 bg-red-600 rounded">Fit</span>Maker
            </h2>

            <p className="max-w-md mt-6 text-sm leading-7 text-gray-500">
              Transform Your Body with FitMaker, Your Trusted Partner in
              Fitness. With Over{" "}
              <span className="font-semibold text-red-500">5 Years</span> of
              Experience, We Offer Expert Coaching, Tailored Workout Plans, and
              Comprehensive Nutritional Guidance.
              <span className="text-orange-400"> Join Our Community</span> and
              Start Your Journey.
            </p>

            <div className="flex gap-5 mt-8 text-2xl text-white">
              <FaFacebookF className="transition cursor-pointer hover:text-red-500 hover:scale-110" />
              <FaInstagram className="transition cursor-pointer hover:text-red-500 hover:scale-110" />
              <FaXTwitter className="transition cursor-pointer hover:text-red-500 hover:scale-110" />
              <FaYoutube className="transition cursor-pointer hover:text-red-500 hover:scale-110" />
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-sm font-semibold tracking-widest text-red-500 uppercase">
              Company
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="cursor-pointer hover:text-red-500">About Us</li>
              <li className="cursor-pointer hover:text-red-500">
                Our Services
              </li>
              <li className="cursor-pointer hover:text-red-500">Careers</li>
              <li className="cursor-pointer hover:text-red-500">Blog</li>
              <li className="cursor-pointer hover:text-red-500">Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-sm font-semibold tracking-widest text-red-500 uppercase">
              Resources
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="cursor-pointer hover:text-red-500">
                Fitness Tools
              </li>
              <li className="cursor-pointer hover:text-red-500">
                Workout Videos
              </li>
              <li className="cursor-pointer hover:text-red-500">
                Nutrition Guides
              </li>
              <li className="cursor-pointer hover:text-red-500">FAQ</li>
              <li className="cursor-pointer hover:text-red-500">
                Success Stories
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-8 text-sm font-semibold tracking-widest text-red-500 uppercase">
              Programs
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="cursor-pointer hover:text-red-500">Weight Loss</li>
              <li className="cursor-pointer hover:text-red-500">
                Building Muscles
              </li>
              <li className="cursor-pointer hover:text-red-500">
                Home Workout
              </li>
              <li className="cursor-pointer hover:text-red-500">Gym Plan</li>
              <li className="cursor-pointer hover:text-red-500">
                Fitness Group
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-sm font-semibold tracking-widest text-red-500 uppercase">
              Contact Us
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <MdLocationOn className="text-xl text-red-500" />
                USA - Washington DC
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-xl text-red-500" />
                1234-56789
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-xl text-red-500" />
                fitmaker@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-6 text-sm text-center text-gray-500 border-t border-white/10">
        © 2025 FitMaker. All Rights Reserved.
      </div>
    </div>
  );
};

export default Futer;
