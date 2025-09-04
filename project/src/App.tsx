import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Clock, Star, ChefHat, Heart, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Tonkotsu Ramen",
      description: "Rich pork bone broth with chashu pork, soft-boiled egg, and green onions",
      price: "$16.99",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Miso Ramen",
      description: "Fermented soybean paste broth with corn, bamboo shoots, and nori",
      price: "$15.99",
      image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Spicy Tantanmen",
      description: "Sesame and chili oil broth with ground pork and bok choy",
      price: "$17.99",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Vegetarian Ramen",
      description: "Plant-based miso broth with tofu, mushrooms, and seasonal vegetables",
      price: "$14.99",
      image: "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      text: "The most authentic ramen outside of Japan! The tonkotsu broth is absolutely incredible.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      text: "Been coming here for 2 years. Consistent quality and amazing service every time.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      text: "Perfect spot for ramen lovers. The spicy tantanmen is my absolute favorite!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-red-600" />
              <span className={`font-bold text-xl transition-colors ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                Ramen House
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium hover:text-red-600 transition-colors ${
                    scrollY > 50 ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-red-600 text-white py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Authentic
            <span className="text-red-500 block">Japanese Ramen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            Experience the true taste of Japan with our carefully crafted broths and fresh ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Order Online
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Signature Bowls
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each bowl is a masterpiece, carefully prepared with authentic techniques and the finest ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">{item.price}</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2018 by Chef Hiroshi Tanaka, Ramen House brings the authentic flavors of Tokyo to your neighborhood. With over 20 years of experience in traditional ramen preparation, Chef Tanaka sources ingredients directly from Japan to ensure every bowl captures the true essence of this beloved dish.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our broths simmer for 18 hours, our noodles are made fresh daily, and every garnish is carefully selected to create the perfect harmony of flavors and textures.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <ChefHat className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Authentic</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef preparing ramen"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                <div className="font-bold text-2xl">18hrs</div>
                <div className="text-sm">Broth Preparation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-stone-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-300">
              Experience authentic ramen in our cozy restaurant
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Location */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <MapPin className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold">Location</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                123 Noodle Street<br />
                Downtown District<br />
                Tokyo Square, TC 12345
              </p>
            </div>

            {/* Contact */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Phone className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold">Contact</h3>
              </div>
              <p className="text-gray-300 mb-2">(555) 123-RAMEN</p>
              <p className="text-gray-300 mb-6">hello@ramenhouse.com</p>
            </div>

            {/* Hours */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Clock className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold">Hours</h3>
              </div>
              <div className="text-gray-300 space-y-1">
                <p>Monday - Thursday: 11am - 10pm</p>
                <p>Friday - Saturday: 11am - 11pm</p>
                <p>Sunday: 12pm - 9pm</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Amazing Ramen?</h3>
              <p className="text-xl mb-8 text-red-100">
                Join thousands of satisfied customers who've discovered their new favorite bowl
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Order for Delivery
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-red-600 transition-all duration-300">
                  Make a Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ChefHat className="h-8 w-8 text-red-500 mr-3" />
                <span className="font-bold text-xl text-white">Ramen House</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bringing the authentic taste of Japan to your neighborhood with passion and tradition.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-red-500 transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ramen House. All rights reserved. Made with ❤️ for ramen lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;