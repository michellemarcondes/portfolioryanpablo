import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaTimes } from 'react-icons/fa';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  const certificates = [
    { id: 1, title: 'React Avançado', image: '/certificados/certificado1.pdf' },
    { id: 2, title: 'UI/UX Design', image: '/certificados/certificado2.pdf' },
    { id: 3, title: 'Node.js Completo', image: '/certificados/certificado1.pdf' },
    { id: 4, title: 'TypeScript Profissional', image: '/certificados/certificado2.pdf' },
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certificados" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Certificados</h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          className="mt-12"
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <div 
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                onClick={() => openModal(certificate)}
              >
                <div className="aspect-[3/2] bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-secondary">{certificate.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            
            <div className="p-2 h-[80vh]">
              <iframe 
                src={selectedCertificate.image} 
                title={selectedCertificate.title}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;