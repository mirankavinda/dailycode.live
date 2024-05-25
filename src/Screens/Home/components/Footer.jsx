import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 font-bold">
      <aside>
        <p>Copyright © 2024 - All right reserved</p>
        </aside>
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
            <Linkedin className="h-4 w-4" />
          </a>

        </div>
      </nav>
    </footer>
  );
};

export default Footer;