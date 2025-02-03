import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-secondary text-primary-foreground py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
        <div className="mt-4 lg:mt-0 text-center">
          <ul className="flex gap-6 justify-center lg:justify-end">
            <li>
              <a
                href="/privacy-policy"
                className="text-sm hover:text-blue-500 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="text-sm hover:text-blue-500 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm hover:text-blue-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
