import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul>
              <li><a href="/books" className="hover:text-white">Books</a></li>
              <li><a href="/ebooks" className="hover:text-white">eBooks</a></li>
              <li><a href="/audiobooks" className="hover:text-white">Audiobooks</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="mb-4">Stay up to date with new releases and exclusive offers.</p>
            <input type="email" placeholder="Your Email" className="bg-gray-700 text-white rounded-md px-4 py-2 w-full mb-2" />
            <button className="bg-primary hover:bg-blue-700 text-white rounded-md px-4 py-2 w-full">Subscribe</button>
          </div>

        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Bookstore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
