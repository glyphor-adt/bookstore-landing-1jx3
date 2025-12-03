import React from 'react'

function Hero() {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Unlock Worlds Within: Your Next Literary Adventure Starts Here</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in">Dive into our curated collection of captivating books. From timeless classics to modern masterpieces, discover stories that will transport you.</p>
          <div className="mt-12 flex justify-center space-x-4 animate-slide-up">
            <a href="/browse" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Explore Our Collection</a>
            <a href="/signup" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300">Create Your Account</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
