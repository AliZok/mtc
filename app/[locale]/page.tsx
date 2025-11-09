import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { 
  HiOutlineHome, 
  HiOutlineBuildingOffice2, 
  HiOutlineBuildingStorefront,
  HiOutlineWrenchScrewdriver
} from 'react-icons/hi2';
import { FaRoad, FaLeaf } from 'react-icons/fa';
import { 
  HiOutlineHandRaised, 
  HiOutlineCurrencyDollar, 
  HiOutlineCheckCircle 
} from 'react-icons/hi2';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  const services = [
    {
      title: t('services.interiorRenovations.title'),
      description: t('services.interiorRenovations.description'),
      icon: HiOutlineHome,
    },
    {
      title: t('services.exteriorRepairs.title'),
      description: t('services.exteriorRepairs.description'),
      icon: HiOutlineBuildingOffice2,
    },
    {
      title: t('services.gardenLandscaping.title'),
      description: t('services.gardenLandscaping.description'),
      icon: FaLeaf,
    },
    {
      title: t('services.roadPaving.title'),
      description: t('services.roadPaving.description'),
      icon: FaRoad,
    },
    {
      title: t('services.smallHouseConstruction.title'),
      description: t('services.smallHouseConstruction.description'),
      icon: HiOutlineBuildingStorefront,
    },
    {
      title: t('services.carpentryTiling.title'),
      description: t('services.carpentryTiling.description'),
      icon: HiOutlineWrenchScrewdriver,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center" style={{ backgroundColor: '#024885' }}>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:opacity-90"
              style={{ backgroundColor: '#cd1e29' }}
            >
              {t('hero.ourServices')}
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 transition-colors duration-200 backdrop-blur-sm"
            >
              {t('hero.learnMore')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl pt-4 font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="pt-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.paragraph3')}
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/mtc-1.jpg"
                alt="Marium Trading and Contracting team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#024885' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('whyChooseUs.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <HiOutlineHandRaised size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('whyChooseUs.directContact.title')}</h3>
              <p className="text-white/80">
                {t('whyChooseUs.directContact.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <HiOutlineCurrencyDollar size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('whyChooseUs.transparentPricing.title')}</h3>
              <p className="text-white/80">
                {t('whyChooseUs.transparentPricing.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <HiOutlineCheckCircle size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('whyChooseUs.qualityWorkmanship.title')}</h3>
              <p className="text-white/80">
                {t('whyChooseUs.qualityWorkmanship.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

