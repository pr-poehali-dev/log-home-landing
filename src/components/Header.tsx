import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { navigationItems } from "@/data/logCabinData";

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="TreePine" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">
              СрубМастер
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button>Заказать консультацию</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
