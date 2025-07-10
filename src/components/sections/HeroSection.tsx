import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 brightness-125"
        style={{
          backgroundImage: `url('/img/60e0bc6c-28e7-4e47-b39d-b4539fd6eb4a.jpg')`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.05)`,
        }}
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-vibrant-yellow/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-vibrant-amber/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-vibrant-yellow/20 backdrop-blur-sm border border-vibrant-yellow/40 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Icon name="Leaf" className="text-vibrant-yellow" size={20} />
            <span className="text-sm font-medium">
              Экологичное строительство с 2010 года
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white animate-fade-in">Срубы из</span>
            <br />
            <span
              className="text-vibrant-yellow animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              натурального дерева
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Ручная работа • Готовые проекты • Индивидуальный заказ
          </p>

          {/* Features Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon
                name="Home"
                className="text-vibrant-yellow mb-4 mx-auto"
                size={32}
              />
              <h3 className="text-lg font-semibold mb-2">Дома</h3>
              <p className="text-sm text-white/80">От 850 000 ₽</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon
                name="Waves"
                className="text-vibrant-yellow mb-4 mx-auto"
                size={32}
              />
              <h3 className="text-lg font-semibold mb-2">Бани</h3>
              <p className="text-sm text-white/80">От 450 000 ₽</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon
                name="Trees"
                className="text-vibrant-yellow mb-4 mx-auto"
                size={32}
              />
              <h3 className="text-lg font-semibold mb-2">Беседки</h3>
              <p className="text-sm text-white/80">От 120 000 ₽</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-vibrant-yellow hover:bg-vibrant-yellow/90 text-black transform hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-6"
            >
              <Icon name="Eye" className="mr-2" size={20} />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-6"
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-20 animate-float">
        <div className="w-16 h-16 bg-vibrant-yellow/10 rounded-full backdrop-blur-sm border border-vibrant-yellow/30 flex items-center justify-center">
          <Icon name="TreePine" className="text-vibrant-yellow" size={24} />
        </div>
      </div>

      <div
        className="absolute top-1/3 right-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-12 h-12 bg-vibrant-yellow/10 rounded-full backdrop-blur-sm border border-vibrant-yellow/30 flex items-center justify-center">
          <Icon name="Hammer" className="text-vibrant-yellow" size={16} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
