import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 mt-20">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/mirankavinda/linebreak-code-ideas.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 hover:text-gray-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4 hover:text-gray-400" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Connect with us @dailytipslive</p>
      </aside>
    </footer>
  );
};

export default Footer;