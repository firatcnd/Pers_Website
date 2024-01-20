import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [

  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Website Tasarımı',
    description:
      'Kullanıcı dostu ve estetik açıdan etkileyici web siteleri tasarlayabilirim. Görsel ve işlevsel olarak amacınıza uygun web tasarımları hazırlayabilirim.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Proje Desteği',
    description:
      'Projenizin her aşamasında sizinle yakından çalışabilirim. Sorularınızı yanıtlamak ve projenizin her aşamasında size destek olmak için hazırım.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Website Geliştirme',
    description:
      'HTML, CSS, JavaScript, Bootstrap, PHP, React ve diğer web teknolojileri konusunda bilgiliyim. Dinamik ve etkileşimli web sayfaları ve web uygulamaları geliştirebilirim.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Marka Kimliği',
    description:
      'Profesyonel ve tanınabilir bir marka kimliği oluşturmak için logosundan renk paletine kadar her detayı düşünebilirim. Markanızın benzersiz özelliklerini vurgulayacak tasarımlar yapabilirim.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Yaratıcı Tasarım',
    description:
      'Farklı sektörlerden müşterilere özel tasarımlar yapabilirim. Görsel olarak etkileyici ve yenilikçi tasarımlar üretmek için özgün fikirlerim var.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title:  'Responsive Tasarım',
    description:
      'Mobil cihazlarda ve farklı ekran boyutlarında web sitelerinizin doğru şekilde görüntülenmesini sağlamak için responsive tasarım tekniklerini kullanabilirim.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
