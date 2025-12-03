import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Why Choose Our Bookstore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Zap className="text-primary w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Instant Access to eBooks</h3>
            <p className="text-gray-600">Download your favorite books immediately after purchase. Start reading within seconds!</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Shield className="text-primary w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Secure and Safe Transactions</h3>
            <p className="text-gray-600">Your payment information is encrypted and protected. Shop with confidence knowing your data is safe.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <TrendingUp className="text-primary w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Curated Selection of Best Sellers</h3>
            <p className="text-gray-600">Explore our handpicked collection of trending books. Discover your next obsession today!</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features
