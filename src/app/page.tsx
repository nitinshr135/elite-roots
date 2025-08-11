import Image from 'next/image'
import { FaLeaf, FaHeart, FaStar, FaTruck, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <FaLeaf className="text-green-600 text-2xl" />
              <h1 className="text-2xl font-bold text-gray-900">Elite Roots</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
              <a href="#benefits" className="text-gray-700 hover:text-green-600 transition-colors">Benefits</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon!
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Discover the{' '}
                  <span className="text-green-600">Ancient Indian</span>{' '}
                  Superfood
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the perfect blend of tradition and health with our premium Fox Nuts (Makhana). 
                  A delicious, crunchy snack that&apos;s been cherished in Indian culture for centuries, 
                  often served during festivals and celebrations as a symbol of prosperity and health.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <FaLeaf className="text-green-600" />
                  <span className="text-sm font-medium text-gray-700">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <FaHeart className="text-red-500" />
                  <span className="text-sm font-medium text-gray-700">Heart Healthy</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <FaStar className="text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">Premium Quality</span>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                  Pre-order Now
                </button>
                <p className="text-sm text-gray-500">*Products will be live soon</p>
                
                {/* Quick Contact Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-green-600" />
                    <span>+91 8759751682</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-green-600" />
                    <span>eliteroots@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] w-full">
                <Image
                  src="https://img.freepik.com/premium-photo/roasted-phool-makhana-crispy-masala-lotus-pops-seed-served-bowl-selective-focus_466689-73318.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Premium Roasted Fox Nuts (Makhana) - Crispy Masala Lotus Pops"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">₹299</div>
                  <div className="text-sm text-gray-500">per 250g pack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Makhana?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked from the finest lotus seeds found in pristine Indian water bodies, our fox nuts are processed 
              using traditional methods to preserve their natural goodness and authentic taste.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pure & Natural</h3>
              <p className="text-gray-600">Sourced directly from pristine water bodies, free from artificial additives and preservatives.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality checks ensure every batch meets our high standards for freshness and taste.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure delivery across India, ensuring your makhana reaches you fresh and intact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Benefits */}
      <section id="benefits" className="py-20 bg-gradient-to-r from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://img.freepik.com/premium-photo/roasted-phool-makhana-crispy-masala-lotus-pops-seed-served-bowl-selective-focus_466689-73318.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Makhana Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nutritional Powerhouse
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fox nuts are not just delicious; they&apos;re packed with essential nutrients that support your overall health and wellness. 
                In Ayurveda, makhana is considered a cooling food that helps balance body temperature and promotes digestive health.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>High Protein:</strong> 9.7g per 100g serving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Low Calories:</strong> Only 350 calories per 100g</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Rich in Minerals:</strong> Calcium, Iron, Magnesium, Phosphorus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Antioxidants:</strong> Natural compounds that fight free radicals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Gluten-Free:</strong> Perfect for those with dietary restrictions</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">9.7g</div>
                <div className="text-sm text-gray-600">Protein per 100g</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">350</div>
                <div className="text-sm text-gray-600">Calories per 100g</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">0g</div>
                <div className="text-sm text-gray-600">Trans Fat</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">14g</div>
                <div className="text-sm text-gray-600">Fiber per 100g</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600">
              Coming soon! Get ready to experience the finest quality makhana
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-2xl text-center border-2 border-dashed border-green-200">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://img.freepik.com/premium-photo/roasted-phool-makhana-crispy-masala-lotus-pops-seed-served-bowl-selective-focus_466689-73318.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Classic Makhana"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Classic Makhana</h3>
              <p className="text-gray-600 mb-4">Traditional roasted fox nuts with a perfect crunch, just like your grandmother used to make</p>
              <div className="text-2xl font-bold text-green-600 mb-2">₹299</div>
              <div className="text-sm text-gray-500">250g Pack</div>
              <div className="mt-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center border-2 border-dashed border-blue-200">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spiced Makhana</h3>
              <p className="text-gray-600 mb-4">Flavorful blend with traditional Indian spices like chaat masala, perfect for evening snacks</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">₹349</div>
              <div className="text-sm text-gray-500">250g Pack</div>
              <div className="mt-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-red-50 p-8 rounded-2xl text-center border-2 border-dashed border-amber-200">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-amber-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Gift Box</h3>
              <p className="text-gray-600 mb-4">Luxury packaging perfect for gifting during Diwali, Raksha Bandhan, or any special occasion</p>
              <div className="text-2xl font-bold text-amber-600 mb-2">₹599</div>
              <div className="text-sm text-gray-500">500g Pack</div>
              <div className="mt-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-green-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 8759751682</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-green-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">eliteroots@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-green-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-300">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaLeaf className="text-green-400 text-2xl" />
                <h3 className="text-xl font-bold text-white">Elite Roots</h3>
              </div>
              <p className="text-gray-400">
                Bringing you the finest quality fox nuts, preserving Indian tradition while promoting health. 
                From our family to yours, with love and care.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Classic Makhana</li>
                <li className="text-gray-400">Spiced Makhana</li>
                <li className="text-gray-400">Premium Gift Box</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 0117.68 17.68c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 0112.315 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              © 2024 Makhana Delights. All rights reserved. | Made with ❤️ in India
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
