import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const logTypes = [
    {
      title: "Бани",
      description: "Традиционные русские бани из рубленного бревна",
      image: "/img/0754e9bc-1960-4e91-bbf8-1d77eeae1e3c.jpg",
      features: ["Ручная рубка", "Натуральное дерево", "Долговечность"],
    },
    {
      title: "Дома",
      description: "Экологичные дома из натурального дерева",
      image: "/img/0754e9bc-1960-4e91-bbf8-1d77eeae1e3c.jpg",
      features: ["Теплоизоляция", "Готовые проекты", "Индивидуальный дизайн"],
    },
    {
      title: "Беседки",
      description: "Уютные беседки для отдыха на природе",
      image: "/img/0754e9bc-1960-4e91-bbf8-1d77eeae1e3c.jpg",
      features: ["Малые формы", "Быстрый монтаж", "Доступная цена"],
    },
  ];

  const advantages = [
    {
      icon: "TreePine",
      title: "Ручная работа",
      description: "Каждый сруб изготавливается вручную опытными мастерами",
    },
    {
      icon: "Hammer",
      title: "Рубленное бревно",
      description: "Используем только качественное рубленное бревно",
    },
    {
      icon: "Shield",
      title: "Долговечность",
      description: "Наши срубы служат десятилетиями",
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "100% натуральные материалы без химии",
    },
  ];

  const testimonials = [
    {
      name: "Михаил Петров",
      text: "Отличная работа! Баня получилась именно такой, как мечтали. Мастера - профессионалы своего дела.",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      text: "Заказывали дом по индивидуальному проекту. Все сделали качественно и в срок. Рекомендуем!",
      rating: 5,
    },
    {
      name: "Дмитрий Волков",
      text: "Беседка превзошла все ожидания. Теперь вся семья проводит там выходные. Спасибо за работу!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
              <a
                href="#catalog"
                className="text-foreground hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <a
                href="#prices"
                className="text-foreground hover:text-primary transition-colors"
              >
                Цены
              </a>
              <a
                href="#reviews"
                className="text-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button>Заказать консультацию</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-wood-light to-wood-warm py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/img/0754e9bc-1960-4e91-bbf8-1d77eeae1e3c.jpg')`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Срубы из натурального дерева
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
              Ручная работа • Готовые проекты • Индивидуальный заказ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Каталог срубов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Изготавливаем срубы для бань, домов и беседок из качественного
              рубленного бревна
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {logTypes.map((type, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              >
                <div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url('${type.image}')` }}
                ></div>
                <CardHeader>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {type.features.map((feature, i) => (
                      <Badge key={i} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему выбирают нас для изготовления срубов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in"
              >
                <div className="mb-4">
                  <Icon
                    name={advantage.icon}
                    className="text-primary mx-auto"
                    size={48}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Цены на срубы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Бани</h3>
                <p className="text-4xl font-bold text-primary mb-2">
                  от 450 000 ₽
                </p>
                <p className="text-muted-foreground">за сруб 6x4 м</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Рубленное бревно</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Ручная работа</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Доставка включена</span>
                </li>
              </ul>
              <Button className="w-full">Заказать</Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-primary">
              <div className="text-center mb-6">
                <Badge className="mb-2">Популярное</Badge>
                <h3 className="text-2xl font-bold mb-2">Дома</h3>
                <p className="text-4xl font-bold text-primary mb-2">
                  от 850 000 ₽
                </p>
                <p className="text-muted-foreground">за сруб 8x8 м</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Готовые проекты</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Индивидуальный заказ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Монтаж под ключ</span>
                </li>
              </ul>
              <Button className="w-full">Заказать</Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Беседки</h3>
                <p className="text-4xl font-bold text-primary mb-2">
                  от 120 000 ₽
                </p>
                <p className="text-muted-foreground">за беседку 4x4 м</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Быстрый монтаж</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Разные размеры</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Доступная цена</span>
                </li>
              </ul>
              <Button className="w-full">Заказать</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-yellow-500 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и заказа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@srubmaster.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Строительная, 15
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Время работы</p>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00-18:00, Сб: 10:00-16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Получить консультацию</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-md"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-border rounded-md"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    className="w-full p-3 border border-border rounded-md h-32"
                    placeholder="Расскажите о своих планах..."
                  ></textarea>
                </div>
                <Button className="w-full">Отправить заявку</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <p>+7 (999) 123-45-67</p>
                <p>info@srubmaster.ru</p>
                <p>г. Москва, ул. Строительная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 СрубМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
