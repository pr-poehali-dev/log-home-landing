import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { advantages } from "@/data/logCabinData";

const AdvantagesSection = () => {
  return (
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
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
