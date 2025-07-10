import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { navigationItems } from "@/data/logCabinData";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Icon
                name="TreePine"
                className="text-primary group-hover:text-primary/80 transition-all duration-300 transform group-hover:scale-110"
                size={36}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-vibrant-yellow rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-foreground">
              СрубМастер
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 group py-2 px-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              <Icon name="Phone" className="mr-2" size={18} />
              Заказать консультацию
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card/95 backdrop-blur-md rounded-lg border border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-4 w-full bg-primary text-primary-foreground">
                <Icon name="Phone" className="mr-2" size={18} />
                Заказать консультацию
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
