import DevImg from '../public/no_back_pic.png';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, PhoneCall, GraduationCap, Calendar, HomeIcon } from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} className="text-blue-500 dark:text-blue-300" />,
    text: 'Choeurn Chantha',
  },
  {
    icon: <PhoneCall size={20} className="text-blue-500 dark:text-blue-300" />,
    text: '+088 29 72 083',
  },
  {
    icon: <MailIcon size={20} className="text-blue-500 dark:text-blue-300" />,
    text: 'choeurnchantha64@gmail.com',
  },
  {
    icon: <Calendar size={20} className="text-blue-500 dark:text-blue-300" />,
    text: 'Born on 10 June, 2006',
  },
  {
    icon: <GraduationCap size={20} className="text-blue-500 dark:text-blue-300" />,
    text: 'Bachelor in Information Technology Engineering',
  },
  {
    icon: <HomeIcon size={20} className="text-blue-500 dark:text-blue-300" />,
    text: `271 street, Tuek L'ak 1, Toul Kouk, Phnom Penh`,
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Top Mean Chey High School',
        qualification: 'Baccalaureate Degree',
        year: '2019 - 2022',
      },
      {
        university: 'Royal University of Phnom Penh',
        qualification: 'Bachelor of Information Technology Engineering',
        year: '2022 - present',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Kampong Speu',
        qualification: 'Volunteer for Cambodia Red Cross',
        year: 'Oct 2019 - Dec 2019',
      },
      {
        company: 'Royal University of Phnom Penh',
        qualification: 'Smart Home Controller',
        year: 'Nov 2023 - Dec 2023',
      },
      {
        company: 'Royal University of Phnom Penh',
        qualification: 'Inventory Management System (Java)',
        year: 'June 2024 - Aug 2024',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'React js and Next js',
      },
      {
        name: 'Database: MySQL MongoDB and Normalization',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'JavaScript, Node.js',
      },
      {
        name: 'Back-end Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: 'icons8-visual-studio-code.svg',
      },
      {
        imgPath: 'icons8-figma.svg',
      },
      {
        imgPath: 'icons8-notion.svg',
      },
      {
        imgPath: 'icons8-wordpress.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="py-16 bg-blue-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row mt-8 w-full md:items-start items-center">
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <Image
              src={DevImg}
              alt="Developer Image"
              className="rounded-full w-40 h-40 md:w-48 md:h-48 shadow-lg border-4 border-blue-500 dark:border-blue-300"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-12">
            <Tabs defaultValue="info">
              <TabsList className="flex gap-4 justify-center md:justify-start mb-6">
                <TabsTrigger
                  value="info"
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 font-medium shadow hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  value="qualifications"
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 font-medium shadow hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 font-medium shadow hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Skills
                </TabsTrigger>
              </TabsList>

              <TabsContent value="info">
                <ul className="text-gray-700 dark:text-gray-300 mt-4 space-y-4">
                  {infoData.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {item.icon}
                      <span className="ml-3">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="qualifications">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center text-blue-600 dark:text-blue-300">
                      <GraduationCap className="mr-2" /> Education
                    </h3>
                    <ul className="text-gray-700 dark:text-gray-300">
                      {getData(qualificationData, 'education').data.map((item, index) => (
                        <li key={index} className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                          <span className="font-bold">{item.university}</span>
                          <span className="block text-sm">{item.qualification}</span>
                          <span className="block text-xs text-gray-500 dark:text-gray-400">{item.year}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center text-blue-600 dark:text-blue-300">
                      <User2 className="mr-2" /> Experience
                    </h3>
                    <ul className="text-gray-700 dark:text-gray-300">
                      {getData(qualificationData, 'experience').data.map((item, index) => (
                        <li key={index} className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                          <span className="font-bold">{item.company}</span>
                          <span className="block text-sm">{item.qualification}</span>
                          <span className="block text-xs text-gray-500 dark:text-gray-400">{item.year}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="skills">
                <h3 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-300">Skills</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-4">
                  {getData(skillData, 'skills').data.map((item, index) => (
                    <li key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                      {item.name}
                    </li>
                  ))}
                </ul>
                <h3 className="font-semibold text-lg mt-8 mb-4 text-blue-600 dark:text-blue-300">Tools</h3>
                <ul className="flex gap-6">
                  {getData(skillData, 'tools').data.map((item, index) => (
                    <li key={index}>
                      <Image src={item.imgPath} alt="Tool Image" width={32} height={32} />
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
