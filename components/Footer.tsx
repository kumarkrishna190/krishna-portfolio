export default function Footer() {
    return (
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            
            {/* Brand */}
            <div>
              <h3 className="text-lg font-semibold">
                Krishna Kumar
              </h3>
              <p className="mt-3 text-sm">
                Founder & Software Engineer
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Building high-leverage software at{" "}
                <span className="font-medium font-bold">
                  IKIGAI APPLICATIONS
                </span>
              </p>
            </div>
  
            {/* Work */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Work
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li><a href="/" className="hover:text-neutral-900">Home</a></li>
                <li><a href="/experience" className="hover:text-neutral-900">Experience</a></li>
                <li><a href="/#ikigai" className="hover:text-neutral-900">IKIGAI APPLICATIONS</a></li>
                <li><a href="/projects" className="hover:text-neutral-900">Projects</a></li>
              </ul>
            </div>
  
            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Connect
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li><a className="underline" href="https://www.linkedin.com/in/kumar-krishna-190/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a className="underline" href="https://github.com/kumarkrishna190" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a className="underline" href="mailto:kumar.krishna190@gmail.com
                ?subject=Collaboration%20with%20Krishna
                &body=Hi%20Krishna,%0D%0A%0D%0AI%20came%20across%20your%20profile%20and%20would%20love%20to%20connect%20with%20you.%0D%0A%0D%0AThanks,%0D%0A">Email</a></li>
                <li><a className="underline" href="https://wa.me/916362354793?text=Hi%20Krishna,%20I%20came%20across%20your%20profile%20and%20would%20love%20to%20connect%20with%20you." 
                    target="_blank" rel="noopener noreferrer">
                    WhatsApp
                </a></li>
                <li><a className="underline" href="tel:+916362354793">
                        +91 63623 54793
                    </a>
                </li>
              </ul>
            </div>
  
            {/* Products */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Products
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li><span>IKIGAI APPLICATIONS</span></li>
                <li><span>Stealth Products</span></li>
                <li><span>Case Studies</span></li>
              </ul>
            </div>
  
          </div>
  
          {/* Bottom bar */}
          <div className="mt-16 border-t border-neutral-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Krishna Kumar. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Built with focus, not fluff.</p>
          </div>
        </div>
      </footer>
    );
  }
  