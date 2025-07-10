import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { logTypes } from "@/data/logCabinData";

const CatalogSection = () => {
  return (
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
  );
};

export default CatalogSection;
