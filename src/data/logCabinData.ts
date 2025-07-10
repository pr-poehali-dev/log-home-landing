export const logTypes = [
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

export const advantages = [
  {
    icon: "TreePine" as const,
    title: "Ручная работа",
    description: "Каждый сруб изготавливается вручную опытными мастерами",
  },
  {
    icon: "Hammer" as const,
    title: "Рубленное бревно",
    description: "Используем только качественное рубленное бревно",
  },
  {
    icon: "Shield" as const,
    title: "Долговечность",
    description: "Наши срубы служат десятилетиями",
  },
  {
    icon: "Leaf" as const,
    title: "Экологичность",
    description: "100% натуральные материалы без химии",
  },
];

export const testimonials = [
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

export const pricingPlans = [
  {
    title: "Бани",
    price: "от 450 000 ₽",
    subtitle: "за сруб 6x4 м",
    features: ["Рубленное бревно", "Ручная работа", "Доставка включена"],
    popular: false,
  },
  {
    title: "Дома",
    price: "от 850 000 ₽",
    subtitle: "за сруб 8x8 м",
    features: ["Готовые проекты", "Индивидуальный заказ", "Монтаж под ключ"],
    popular: true,
  },
  {
    title: "Беседки",
    price: "от 120 000 ₽",
    subtitle: "за беседку 4x4 м",
    features: ["Быстрый монтаж", "Разные размеры", "Доступная цена"],
    popular: false,
  },
];

export const contactInfo = {
  phone: "+7 (999) 123-45-67",
  email: "info@srubmaster.ru",
  address: "г. Москва, ул. Строительная, 15",
  workingHours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
};

export const navigationItems = [
  { href: "#catalog", label: "Каталог" },
  { href: "#prices", label: "Цены" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];
