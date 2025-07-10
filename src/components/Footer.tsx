import Icon from "@/components/ui/icon";
import { contactInfo } from "@/data/logCabinData";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="TreePine" className="text-primary" size={24} />
              <span className="text-xl font-bold">СрубМастер</span>
            </div>
            <p className="text-muted-foreground">
              Изготовление срубов из натурального дерева с 2010 года
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Срубы для бань
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Срубы для домов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Беседки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Монтаж
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Доставка
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 СрубМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
