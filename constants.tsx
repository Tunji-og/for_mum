
import React from 'react';
import { TributeItem, GalleryImageItem } from './types';

// Heroicons SVGs - you can find more at https://heroicons.com/
const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.354a15.055 15.055 0 0 1-4.5 0M12 6.75A2.25 2.25 0 0 0 9.75 9v1.076c0 .24.02.478.06.714M12 6.75a2.25 2.25 0 0 1 2.25 2.25v1.076c0 .24-.02.478-.06.714M12 6.75v3.472M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 2.25v.75A.75.75 0 0 1 11.25 15h-1.5a.75.75 0 0 1-.75-.75V14.25m1.5-1.5h.008v.008H12V12.75Z" />
  </svg>
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);


export const TRIBUTE_DATA: TributeItem[] = [
  {
    id: 'strength',
    icon: <ShieldCheckIcon className="w-12 h-12 text-purple-600" />,
    title: 'Our Unwavering Strength',
    description: "Through every challenge, you've been our fortress and our inspiration. Your resilience has taught us how to face life with courage and grace.",
    imageSrc: '/Images/family_60th_birthday_celebration.png', // Replace with your actual image file
    imageAlt: "The family celebrating Mum's 60th birthday, a testament to enduring strength and unity",
  },
  {
    id: 'guidance',
    icon: <LightBulbIcon className="w-12 h-12 text-purple-600" />,
    title: 'Our Guiding Light',
    description: "Your wisdom has illuminated our paths, and your advice has always been our most trusted compass. Thank you for showing us the way.",
    imageSrc: '/Images/mum_outdoor.png', // Replace with your actual image file
    imageAlt: "Mum with her daughters outdoors, a guiding presence in their lives",
  },
  {
    id: 'love',
    icon: <HeartIcon className="w-12 h-12 text-purple-600" />,
    title: 'Our Endless Love',
    description: "Your love is the heartbeat of our family – a constant, unconditional source of warmth and comfort. It's the greatest gift you've given us.",
    imageSrc: '/Images/mum_kissed_on_cheek.png', // Replace with your actual image file
    imageAlt: "A tender moment showing a daughter's love for Mum as she kisses her cheek",
  },
];

export const GALLERY_ITEMS: GalleryImageItem[] = [
    { 
      id: 'mem1', 
      src: '/Images/happy_family_selfie_indoors.png', // Replace with your actual image file
      alt: 'A happy family selfie with Mum and her children indoors', 
      caption: '' 
    },
    { 
      id: 'mem2', 
      src: '/Images/mum_laughing_with_daughters_studio.png', // Replace with your actual image file
      alt: 'Mum sharing a joyful laugh with her daughters in a studio setting', 
      caption: '' 
    },
    { 
      id: 'mem3', 
      src: '/Images/family_at_airport_adventure.png', // Replace with your actual image file
      alt: 'The family at the airport with luggage, ready for an adventure', 
      caption: '' 
    },
    { 
      id: 'mem4', 
      src: '/Images/mum_son_daughter_indoors_gathering.png', // Replace with your actual image file
      alt: 'Mum with her son and daughter, a special family gathering indoors', 
      caption:  ''
    },
    { 
      id: 'mem5', 
      src: '/Images/family_kilimanjaro_restaurant.png', // Replace with your actual image file
      alt: 'A fun family outing at the Kilimanjaro restaurant', 
      caption: '' 
    },
    { 
      id: 'mem6', 
      src: '/Images/mum_family_light_colors.png', // Replace with your actual image file
      alt: 'Mum surrounded by her loving family, dressed in light colors', 
      caption: '' 
    },
];
