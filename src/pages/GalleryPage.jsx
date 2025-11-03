import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: '/images/Brown Elegant Tender Aesthetic Spring Moodboard Photo Collage Desktop Wallpaper.png',
      alt: 'Professional security and facility management services',
      title: 'Security Operations'
    },
    {
      src: '/images/WhatsApp Image 2025-10-09 at 10.46.28_841606aa.jpg',
      alt: 'Team performing facility maintenance and housekeeping',
      title: 'Facility Maintenance'
    },
    {
      src: '/images/WhatsApp Image 2025-10-25 at 5.48.04 PM.jpeg',
      alt: 'CCTV surveillance and control room environment',
      title: 'Surveillance Systems'
    },
    {
      src: '/images/Brown Elegant Tender Aesthetic Spring Moodboard Photo Collage Desktop Wallpaper.png',
      alt: 'Vision Technocrates logo',
      title: 'Company Branding'
    },
    {
      src: '/images/IMG-20251008-WA0004.jpg',
      alt: 'Gallery Image 1',
      title: 'Gallery Image 1'
    },
    {
      src: '/images/IMG-20251008-WA0005.jpg',
      alt: 'Gallery Image 2',
      title: 'Gallery Image 2'
    },
    {
      src: '/images/IMG-20251008-WA0006.jpg',
      alt: 'Gallery Image 3',
      title: 'Gallery Image 3'
    },
    {
      src: '/images/IMG-20251008-WA0007.jpg',
      alt: 'Gallery Image 4',
      title: 'Gallery Image 4'
    },
    {
      src: '/images/IMG-20251008-WA0008.jpg',
      alt: 'Gallery Image 5',
      title: 'Gallery Image 5'
    },
    {
      src: '/images/IMG-20251008-WA0009.jpg',
      alt: 'Gallery Image 6',
      title: 'Gallery Image 6'
    },
    {
      src: '/images/IMG-20251008-WA0010.jpg',
      alt: 'Gallery Image 7',
      title: 'Gallery Image 7'
    },
    {
      src: '/images/IMG-20251008-WA0011.jpg',
      alt: 'Gallery Image 8',
      title: 'Gallery Image 8'
    },
    {
      src: '/images/IMG-20251008-WA0012.jpg',
      alt: 'Gallery Image 9',
      title: 'Gallery Image 9'
    },
    {
      src: '/images/IMG-20251010-WA0011.jpg',
      alt: 'Gallery Image 10',
      title: 'Gallery Image 10'
    },
    {
      src: '/images/IMG-20251010-WA0012.jpg',
      alt: 'Gallery Image 11',
      title: 'Gallery Image 11'
    },
    {
      src: '/images/IMG-20251010-WA0013.jpg',
      alt: 'Gallery Image 12',
      title: 'Gallery Image 12'
    },
    {
      src: '/images/IMG-20251010-WA0014.jpg',
      alt: 'Gallery Image 13',
      title: 'Gallery Image 13'
    },
    {
      src: '/images/IMG-20251011-WA0004.jpg',
      alt: 'Gallery Image 14',
      title: 'Gallery Image 14'
    },
    {
      src: '/images/IMG-20251011-WA0009.jpg',
      alt: 'Gallery Image 15',
      title: 'Gallery Image 15'
    },
    {
      src: '/images/IMG-20251011-WA0010.jpg',
      alt: 'Gallery Image 16',
      title: 'Gallery Image 16'
    },
    {
      src: '/images/IMG-20251011-WA0011.jpg',
      alt: 'Gallery Image 17',
      title: 'Gallery Image 17'
    },
    {
      src: '/images/IMG-20251011-WA0012.jpg',
      alt: 'Gallery Image 18',
      title: 'Gallery Image 18'
    },
    {
      src: '/images/IMG-20251011-WA0013.jpg',
      alt: 'Gallery Image 19',
      title: 'Gallery Image 19'
    },
    {
      src: '/images/IMG-20251011-WA0014.jpg',
      alt: 'Gallery Image 20',
      title: 'Gallery Image 20'
    },
    {
      src: '/images/IMG-20251011-WA0015.jpg',
      alt: 'Gallery Image 21',
      title: 'Gallery Image 21'
    },
    {
      src: '/images/IMG-20251011-WA0016.jpg',
      alt: 'Gallery Image 22',
      title: 'Gallery Image 22'
    },
    {
      src: '/images/IMG-20251011-WA0017.jpg',
      alt: 'Gallery Image 23',
      title: 'Gallery Image 23'
    },
    {
      src: '/images/WhatsApp Image 2025-10-09 at 10.46.28_b12ef0ca.jpg',
      alt: 'Gallery Image 24',
      title: 'Gallery Image 24'
    },
    {
      src: '/images/WhatsApp Image 2025-10-09 at 10.46.29_696330f2.jpg',
      alt: 'Gallery Image 25',
      title: 'Gallery Image 25'
    },
    {
      src: '/images/WhatsApp Image 2025-10-10 at 12.37.12_e7e3df06.jpg',
      alt: 'Gallery Image 26',
      title: 'Gallery Image 26'
    },
    {
      src: '/images/WhatsApp Image 2025-10-10 at 16.11.55_1f76d46d.jpg',
      alt: 'Gallery Image 27',
      title: 'Gallery Image 27'
    },
    {
      src: '/images/WhatsApp Image 2025-10-10 at 16.11.55_8b39979e.jpg',
      alt: 'Gallery Image 28',
      title: 'Gallery Image 28'
    },
    {
      src: '/images/WhatsApp Image 2025-10-10 at 16.11.56_d4ab7831.jpg',
      alt: 'Gallery Image 29',
      title: 'Gallery Image 29'
    },
    {
      src: '/images/WhatsApp Image 2025-10-10 at 20.15.36_71125b14.jpg',
      alt: 'Gallery Image 30',
      title: 'Gallery Image 30'
    },
    {
      src: '/images/WhatsApp Image 2025-10-10 at 20.15.37_cda50982.jpg',
      alt: 'Gallery Image 31',
      title: 'Gallery Image 31'
    }
  ];

  const openModal = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive portfolio of security solutions, facility management services,
            and professional operations that showcase our commitment to excellence.
          </p>
        </motion.div>



        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openModal(galleryImages.indexOf(image))}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={24} />
              </button>


            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
