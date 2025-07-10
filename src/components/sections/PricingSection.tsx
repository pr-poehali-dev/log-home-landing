import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { pricingPlans } from "@/data/logCabinData";

const PricingSection = () => {
  return (
    <section id="prices" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Цены на срубы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-shadow animate-fade-in ${plan.popular ? "border-primary" : ""}`}
            >
              <div className="text-center mb-6">
                {plan.popular && <Badge className="mb-2">Популярное</Badge>}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                </p>
                <p className="text-muted-foreground">{plan.subtitle}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Заказать</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
