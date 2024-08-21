import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { media } from '../utils/media';

interface Card {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
}

interface CardCarouselProps {
  items: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ items }) => {
  const [centerPercentage, setCenterPercentage] = useState(50);

  useEffect(() => {
    // Pencere boyutu değiştiğinde çalışacak fonksiyon
    const handleResize = () => {
      // Eğer ekran genişliği 768px'den küçükse, mobil cihaz varsayalım
      if (window.innerWidth < 768) {
        setCenterPercentage(100);
      } else {
        setCenterPercentage(50);
      }
    };

    // İlk yükleme ve her pencere boyutu değişikliğinde bu fonksiyonu çalıştır
    window.addEventListener('resize', handleResize);
    handleResize(); // İlk yüklemede de çalıştır

    // Temizlik fonksiyonu
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Title>Projelerİm;</Title>

      <Carousel showThumbs={false} dynamicHeight emulateTouch showArrows={true}
                infiniteLoop={true}
                showStatus={false}
                autoPlay={true}
                interval={3000}
                centerMode={true}
                centerSlidePercentage={centerPercentage}>
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.imageUrl} alt={item.title} className="card-image" />
            <div className="card-overlay">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description"><a className={"websiteUrl"} href={item.websiteUrl}>{item.description}</a></p>
            </div>
          </div>
        ))}
      </Carousel>


      <style jsx>{`
        .websiteUrl {
          text-decoration: none;
          color: #fff;
        }
        
        
        .card {
          position: relative;
          text-align: center;
          color: white;
          margin: 0 5rem;

        }

        .card-image {
          width: 100% !important;
          height: auto;
          display: block;
          border-radius: 25px;
        }

        .card-overlay {
          width: 100% !important;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          border-radius: 24px;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.7); /* Yarı şeffaf arka plan */
        }

        .card-title {
          margin: 0;
          padding: 10px;
          font-size: 1.5em;
        }

        .card-description {
          font-family: Georgia;
          margin: 0;
          padding: 10px;
          font-size: 3em;
          
        }
        @media screen and (max-device-width: 700px) {
          .card-description {
            font-family: Georgia;
            margin: 0;
            padding: 10px;
            font-size: 1.5em;

          }
          
        }
        
      `}</style>
    </>
  );
};

const Title = styled.h3`
  font-size: 3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.8;
  margin-top: 7rem !important;
}

  ${media('<=desktop')} {
    line-height: 1.5;
    font-size: 3rem;
    margin-top: 2rem !important;
  }
  
`;
const App: React.FC = () => {

  const items: Card[] = [
    {
      title: '',
      description: 'cekaautomobilegmbh.com',
      imageUrl: './works/ceka.png', // Resim URL'si
      websiteUrl:'https://cekaautomobilegmbh.com'
    },
    {
      title: '',
      description: 'giannimotorsgmbh.com',
      imageUrl: './works/gia.png', // Resim URL'si
      websiteUrl:'https://giannimotorsgmbh.com'
    },
    {
      title: '',
      description: 'iqpara.com',
      imageUrl: './works/iqpr.png', // Resim URL'si
      websiteUrl:'https://iqpara.com'
    },
    {
      title: '',
      description: 'payset.com',
      imageUrl: './works/ps.png', // Resim URL'si
      websiteUrl:'https://payset.com'
    },
    {
      title: '',
      description: 'iqproperty.us',
      imageUrl: './works/iqpro.png', // Resim URL'si
      websiteUrl:'https://iqproperty.us'
    },
  ];

  return <CardCarousel items={items} />;
};

export default App;
