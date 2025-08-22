export default function Footer() {
  return (
    <footer className="w-full bg-[#000814] text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#b99f5a] mb-2">Layer Next</h2>
          <p className="text-sm lg:text-md text-gray-400">
            Adding a layer of next-gen design to every space.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@layernext.com" className="hover:text-[#b99f5a]">info@layernext.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-[#b99f5a]">+1 234 567 890</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-[#b99f5a]">About Us</a>
            </li>
            <li>
              <a href="#philosophy" className="hover:text-[#b99f5a]">Philosophy</a>
            </li>
            <li>
              <a href="/consult" className="hover:text-[#b99f5a]">Book Consultation</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#b99f5a] py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Layer Next. All rights reserved.
      </div>
    </footer>
  );
}
