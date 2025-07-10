import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { contactInfo } from "@/data/logCabinData";

const ContactSection = () => {
  return (
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
                  <p className="text-muted-foreground">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Время работы</p>
                  <p className="text-muted-foreground">
                    {contactInfo.workingHours}
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
  );
};

export default ContactSection;
