import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Clock, Star, UtensilsCrossed, Heart, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔥 兰州拉面特色菜品
  const menuItems = [
    {
      name: "兰州牛肉面",
      description: "清汤牛肉，手工拉面，配以白萝卜片、红辣椒油、绿香菜点缀，经典五色齐全。",
      price: "RM18.90",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "刀削面",
      description: "入口劲道的刀削面，浓郁牛肉汤底，佐以时令蔬菜。",
      price: "RM16.90",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "干拌牛肉面",
      description: "鲜香牛肉与秘制酱料拌面，香辣可口，适合喜欢重口味的食客。",
      price: "RM17.90",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "素面",
      description: "清汤配豆腐、木耳、香菇等蔬菜，清淡健康。",
      price: "RM15.90",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Li Wei",
      text: "汤清味浓，辣椒油香气十足，真正的兰州拉面！",
      rating: 5
    },
    {
      name: "Ahmad Musa",
      text: "牛肉片软嫩入味，面条手工劲道，非常值得推荐。",
      rating: 5
    },
    {
      name: "Siti Nur",
      text: "第一次尝试兰州拉面，简直惊艳！已经成为我最爱的面食。",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* 🔹 Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-red-600" />
              <span className={`font-bold text-xl transition-colors ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                兰州拉面馆
              </span>
            </div>

            {/* Desktop Menu */}
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
                点餐外卖
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
                点餐外卖
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 🔹 Hero Section */}
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
            正宗
            <span className="text-red-500 block">兰州拉面</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            手工拉面 · 清汤牛肉 · 百年传承的兰州味道
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              点餐外卖
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
              查看菜单
            </button>
          </div>
        </div>
      </section>

      {/* 🔹 Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              特色面食
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              每一碗面，都是匠心之作，遵循正宗兰州拉面的传统。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
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
                      加入购物车
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section id="about" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                我们的故事
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                兰州拉面起源于清末，百年来以“一清、二白、三红、四绿、五黄”的特色享誉全国。
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                张师傅拥有30余年制面经验，每天现拉现煮，确保每碗面条劲道、汤鲜味美。
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">30+</div>
                  <div className="text-sm text-gray-600">年经验</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">100K+</div>
                  <div className="text-sm text-gray-600">满意顾客</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <UtensilsCrossed className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">正宗风味</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="师傅拉面"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                <div className="font-bold text-2xl">百年</div>
                <div className="text-sm">传统工艺</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              顾客评价
            </h2>
            <p className="text-xl text-gray-600">
              听听大家怎么说
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-stone-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
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

      {/* 🔹 Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              欢迎光临
            </h2>
            <p className="text-xl text-gray-300">
              在这里体验最正宗的兰州拉面
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <MapPin className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold">地址</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                123 Noodle Street<br />
                Chinatown, Kuala Lumpur<br />
                Malaysia
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Phone className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold">电话</h3>
              </div>
              <p className="text-gray-300 mb-2">+60 12-345 6789</p>
              <p className="text-gray-300 mb-6">hello@lanzhouramen.com</p>
            </div>

            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Clock className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold">营业时间</h3>
              </div>
              <div className="text-gray-300 space-y-1">
                <p>周一 - 周四: 11am - 10pm</p>
                <p>周五 - 周六: 11am - 11pm</p>
                <p>周日: 12pm - 9pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <UtensilsCrossed className="h-8 w-8 text-red-500 mr-3" />
                <span className="font-bold text-xl text-white">兰州拉面馆</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                每一碗面，都是兰州的味道。
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">快速导航</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-red-500 transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">关注我们</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'WeChat'].map((social) => (
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
            <p>&copy; 2025 兰州拉面馆. All rights reserved. Made with ❤️ for noodle lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
