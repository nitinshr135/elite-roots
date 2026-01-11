import Image from 'next/image'
import { FaLeaf, FaHeart, FaStar, FaTruck, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaHandshake, FaRecycle, FaSeedling, FaDumbbell, FaMedkit } from 'react-icons/fa'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#202B21' }}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 hover:bg-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Logo size="lg" showText={true} />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110">About</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110">Products</a>
              <a href="#benefits" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110">Benefits</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110">Contact</a>
            </nav>
            {/* <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon!
              </span>
            </div> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <div className="text-2xl font-semibold text-green-600 mb-2">ELITES ROOTS</div>
                <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Deep Roots.{' '}
                  <span className="text-green-600">Pure Nutrition.</span>{' '}
                  Global Vision.
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  A proudly Bihar-born brand, deeply rooted in the fertile soil, culture, and legacy of Mithila and North Bihar —
                  the heartland of the world&apos;s finest foxnuts (makhana).
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <FaLeaf className="text-green-600" />
                  <span className="text-sm font-medium text-white">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <FaHeart className="text-red-500" />
                  <span className="text-sm font-medium text-white">Heart Healthy</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <FaStar className="text-yellow-500" />
                  <span className="text-sm font-medium text-white">Premium Quality</span>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform cursor-default">
                  Pre-order Soon
                </button>
                <p className="text-sm text-gray-400">*Products will be live soon</p>

                {/* Quick Contact Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-green-600" />
                    <span>+91 81004 24891</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-green-600" />
                    <span>elitesroots@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="relative h-96 lg:h-[500px] w-full group">
                <Image
                  src="https://img.freepik.com/premium-photo/roasted-phool-makhana-crispy-masala-lotus-pops-seed-served-bowl-selective-focus_466689-73318.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Premium Roasted Fox Nuts (Makhana) - Crispy Masala Lotus Pops"
                  fill
                  className="object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">₹299</div>
                  <div className="text-sm text-gray-500">per 250g pack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Elites Roots is a proudly Bihar-born brand, deeply rooted in the fertile soil, culture, and legacy of
              <strong className="text-green-600"> Mithila and North Bihar</strong>, the heartland of the world&apos;s finest foxnuts (makhana).
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mt-6 leading-relaxed">
              We are not just a food company — we are a movement to revive Bihar&apos;s heritage, empower its farmers,
              and take one of India&apos;s healthiest superfoods to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Why Elites Roots Section */}
      <section className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Why &quot;Elites Roots&quot;</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-right">
              <div className="flex items-center mb-4">
                <FaStar className="text-green-600 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-white">Elites</h3>
              </div>
              <p className="text-gray-300 text-lg">Represents quality, purity, and excellence</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-left">
              <div className="flex items-center mb-4">
                <FaLeaf className="text-green-600 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-white">Roots</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Our deep connection to Bihar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Our respect for farmers and traditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Our belief that strong roots create global strength</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-lg text-gray-300 italic max-w-3xl mx-auto">
              Just like a tree with deep roots grows tall and strong, Elites Roots stands firmly on Bihar&apos;s soil while reaching global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Our Deep Bihar Roots Section */}
      <section className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Our Deep Bihar Roots</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-green-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-600/30 transition-all duration-300">
                <FaGlobe className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">World&apos;s Largest Producer</h3>
              <p className="text-gray-300">Bihar is the largest producer of foxnuts in the world</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-amber-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-amber-600/30 transition-all duration-300">
                <FaHandshake className="text-amber-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Generations of Expertise</h3>
              <p className="text-gray-300">Home to generations of farmers who have perfected this crop</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600/30 transition-all duration-300">
                <FaLeaf className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pure & Traditional</h3>
              <p className="text-gray-300">A land known for pure, natural, and traditional foods</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-4xl mx-auto hover:bg-white/15 transition-all duration-300" data-aos="fade-up">
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-green-600">Yet for decades, Bihar&apos;s farmers remained invisible.</strong>
            </p>
            <p className="text-xl font-semibold text-white mb-4">Elites Roots exists to change that.</p>
            <p className="text-gray-300">
              We source directly from local farmer communities, preserve traditional harvesting methods,
              and combine them with modern quality standards — ensuring authenticity without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in premium-quality foxnuts (makhana) that are:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <FaSeedling className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Naturally Grown</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <FaDumbbell className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Rich in Protein, Calcium & Antioxidants</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <FaMedkit className="text-amber-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Ideal for Fitness, Fasting, Kids & Mindful Eating</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <FaGlobe className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Processed for Indian & Global Consumers</h3>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From traditional roasted makhana to modern healthy snack formats, we make Bihar&apos;s superfood relevant for today&apos;s world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-3xl font-bold text-green-600 mb-8">
              To Grow Bihar. To Nourish India. To Serve the World.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-green-600/20 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-green-600/30 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <FaHandshake className="text-green-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-300 font-medium">Empower Bihar&apos;s farmers through fair sourcing</p>
            </div>

            <div className="bg-blue-600/20 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-blue-600/30 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <FaGlobe className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-300 font-medium">Build global respect for Indian superfoods</p>
            </div>

            <div className="bg-amber-600/20 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-amber-600/30 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <FaLeaf className="text-amber-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-300 font-medium">Promote healthy eating without losing cultural roots</p>
            </div>

            <div className="bg-purple-600/20 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-purple-600/30 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <FaStar className="text-purple-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-300 font-medium">Create employment and pride within Bihar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Our Vision</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-2xl font-semibold text-gray-300 mb-8 max-w-4xl mx-auto">
              To make Bihar the global identity of foxnuts, just as:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <p className="text-lg font-semibold text-white">Switzerland</p>
              <p className="text-gray-300">is known for chocolate</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <p className="text-lg font-semibold text-white">Colombia</p>
              <p className="text-gray-300">for coffee</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <p className="text-lg font-semibold text-white">Japan</p>
              <p className="text-gray-300">for matcha</p>
            </div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto hover:bg-white/15 transition-all duration-300" data-aos="fade-up">
            <p className="text-2xl font-bold text-green-600">
              When the world eats foxnuts, it should remember Bihar — and Elites Roots.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-green-600/20 backdrop-blur-sm p-8 rounded-xl hover:bg-green-600/30 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <FaLeaf className="text-green-600 text-3xl mr-4" />
                <h3 className="text-xl font-bold text-white">Roots Before Revenue</h3>
              </div>
              <p className="text-gray-300">Farmers & land come first</p>
            </div>

            <div className="bg-blue-600/20 backdrop-blur-sm p-8 rounded-xl hover:bg-blue-600/30 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <FaStar className="text-blue-600 text-3xl mr-4" />
                <h3 className="text-xl font-bold text-white">Elite Quality</h3>
              </div>
              <p className="text-gray-300">No compromise on standards</p>
            </div>

            <div className="bg-amber-600/20 backdrop-blur-sm p-8 rounded-xl hover:bg-amber-600/30 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <FaGlobe className="text-amber-600 text-3xl mr-4" />
                <h3 className="text-xl font-bold text-white">Indian Pride, Global Mindset</h3>
              </div>
            </div>

            <div className="bg-purple-600/20 backdrop-blur-sm p-8 rounded-xl hover:bg-purple-600/30 hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center mb-4">
                <FaRecycle className="text-purple-600 text-3xl mr-4" />
                <h3 className="text-xl font-bold text-white">Sustainability & Ethical Growth</h3>
              </div>
            </div>

            <div className="bg-red-600/20 backdrop-blur-sm p-8 rounded-xl hover:bg-red-600/30 hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center mb-4">
                <FaHeart className="text-red-600 text-3xl mr-4" />
                <h3 className="text-xl font-bold text-white">Health as a Lifestyle</h3>
              </div>
              <p className="text-gray-300">Not a trend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Benefits */}
      <section id="benefits" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#202B21' }}>
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
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-white mb-6">
                Nutritional Powerhouse
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Fox nuts are not just delicious; they&apos;re packed with essential nutrients that support your overall health and wellness.
                In Ayurveda, makhana is considered a cooling food that helps balance body temperature and promotes digestive health.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-white">High Protein:</strong> 9.7g per 100g serving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-white">Low Calories:</strong> Only 350 calories per 100g</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-white">Rich in Minerals:</strong> Calcium, Iron, Magnesium, Phosphorus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-white">Antioxidants:</strong> Natural compounds that fight free radicals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-white">Gluten-Free:</strong> Perfect for those with dietary restrictions</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">9.7g</div>
                <div className="text-sm text-gray-300">Protein per 100g</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">350</div>
                <div className="text-sm text-gray-300">Calories per 100g</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-amber-600 mb-2">0g</div>
                <div className="text-sm text-gray-300">Trans Fat</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">14g</div>
                <div className="text-sm text-gray-300">Fiber per 100g</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-300">
              Get ready to experience the finest quality makhana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border-2 border-dashed border-green-600/30 hover:bg-white/20 hover:scale-105 hover:border-green-600/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://img.freepik.com/premium-photo/roasted-phool-makhana-crispy-masala-lotus-pops-seed-served-bowl-selective-focus_466689-73318.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Classic Makhana"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Classic Makhana</h3>
              <p className="text-gray-300 mb-4">Traditional roasted fox nuts with a perfect crunch, just like your grandmother used to make</p>
              <div className="text-2xl font-bold text-green-600 mb-2">₹299</div>
              <div className="text-sm text-gray-400">250g Pack</div>
              {/* <div className="mt-4">
                <span className="bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div> */}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border-2 border-dashed border-blue-600/30 hover:bg-white/20 hover:scale-105 hover:border-blue-600/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Spiced Makhana</h3>
              <p className="text-gray-300 mb-4">Flavorful blend with traditional Indian spices like chaat masala, perfect for evening snacks</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">₹349</div>
              <div className="text-sm text-gray-400">250g Pack</div>
              {/* <div className="mt-4">
                <span className="bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div> */}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border-2 border-dashed border-amber-600/30 hover:bg-white/20 hover:scale-105 hover:border-amber-600/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-amber-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Gift Box</h3>
              <p className="text-gray-300 mb-4">Luxury packaging perfect for gifting during Diwali, Raksha Bandhan, or any special occasion</p>
              <div className="text-2xl font-bold text-amber-600 mb-2">₹599</div>
              <div className="text-sm text-gray-400">500g Pack</div>
              {/* <div className="mt-4">
                <span className="bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6" data-aos="fade-right">
              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                <FaPhone className="text-green-400 text-xl" />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+91 81004 24891</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                <FaEnvelope className="text-green-400 text-xl" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">elitesroots@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                <FaMapMarkerAlt className="text-green-400 text-xl" />
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-gray-300">Darbhanga, Bihar</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-all duration-300" data-aos="fade-left">
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
      <footer className="py-12 border-t border-gray-700/50" style={{ backgroundColor: '#202B21' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8" data-aos="fade-up">
            <div>
              <div className="mb-4">
                <Logo size="md" variant="white" showText={true} />
              </div>
              <p className="text-gray-400">
                Deep Roots. Pure Nutrition. Global Vision. A proudly Bihar-born brand, bringing the world&apos;s finest foxnuts
                from the heartland of Mithila and North Bihar to your table.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 inline-block">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 inline-block">Products</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 inline-block">Benefits</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 inline-block">Contact</a></li>
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
              <div className='flex flex-row gap-4'>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/elites_roots/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                    aria-label="Follow us on Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 2500 2500"><defs><radialGradient id="0" cx="332.14" cy="2511.81" r="3263.54" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21" /><stop offset=".78" stopColor="#d82d7e" /></radialGradient><radialGradient id="1" cx="1516.14" cy="2623.81" r="2572.12" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" /><stop offset="1" stopColor="#8c3aaa" /></radialGradient></defs><path d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57" fill="url(#0)" /><path d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57" fill="url(#1)" /></svg>
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/elites-roots/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 382 382"
                      role="img"
                      className="h-6 w-6"
                    >
                      <title>LinkedIn</title>
                      <path fill="#0077B7" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z" />
                    </svg>
                  </a>
                </div></div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700/50 text-center">
            <p className="text-gray-400">
              © 2024 Elites Roots. All rights reserved. | Made with ❤️ in Bihar, India
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
