import { GanttChartIcon, Blocks, Gem } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

const serviceData = [
  {
    icons: <GanttChartIcon size={56} strokeWidth={1} className="text-blue-600 dark:text-blue-400" />,
    title: 'UI/UX Design',
    description: `Our UI/UX Design service is dedicated to creating engaging and user-centered designs that enhance the overall user experience. We believe that good design goes beyond aesthetics; it's about how users interact with your product.`,
  },
  {
    icons: <Blocks size={56} strokeWidth={1} className="text-green-600 dark:text-green-400" />,
    title: 'Web Development',
    description: 'In our Web Development service, we specialize in creating robust, scalable, and responsive websites tailored to meet your specific business needs.',
  },
  {
    icons: <Gem size={56} strokeWidth={1} className="text-purple-600 dark:text-purple-400" />,
    title: 'App Development',
    description: `Our App Development service focuses on crafting intuitive and high-performing mobile applications for both iOS and Android platforms.`,
  },
];

const Service = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-gray-100">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105"
            >
              <CardHeader className="flex justify-center items-center mt-6">
                {service.icons}
              </CardHeader>
              <CardContent className="text-center p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{service.title}</h3>
                <CardDescription className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
