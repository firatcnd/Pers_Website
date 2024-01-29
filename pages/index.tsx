import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Works from '../components/Works';


export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Fırat Can Demirel Personal Website"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="https://rive.app/community/5280-10531-hard-at-work/embed" title="Eğitim ve Staj Deneyimi" overTitle="Staj Sürecİm">
            <p>
              Ataşehir MYO'dan 2022 yılında Bilgisayar Programcılığı önlisans derecesi ile mezun oldum. Mezuniyetimin ardından IQ Money firmasında stajyer olarak işe başladım ve 1 yıl boyunca burada çalıştım. Staj sürecimde,
              Frontend geliştirme konusunda temel becerilerimi geliştirdim ve{' '}
              <Link href="#">React, Vue.js, HTML/CSS/Javascript gibi teknolojilere</Link>
              {' '}hakim oldum..
            </p>
          </BasicSection>
          <BasicSection imageUrl="https://rive.app/community/5051-10195-im-scared-of-mouse-hovers/embed" title="Frontend Developer Deneyimi" overTitle="İş Sürecİm" reversed>
            <p>
              Bir Firmada Frontend Developer olarak görev aldım ve 2 yıl boyunca burada çalıştım.
              Git ve phpMyAdmin gibi araçları kullanarak ekip çalışması deneyimi edindim. HTML, CSS, Javascript, Bootstrap, React, Vue.js ve AngularJS gibi teknolojilerde güçlü becerilere sahibim.
              Problem çözme yeteneklerimi geliştirdim ve ekip içinde etkili iletişim kurma becerilerimi artırdım.
            </p>
            {/* <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul>*/}
          </BasicSection>


        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>

          <Cta />
          {/*<FeaturesGallery />*/}
          <Features />
          {/*<Testimonials />*/}
          {/*<ScrollableBlogPosts posts={posts} />*/}
          <Works />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}


const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

// export async function getStaticProps() {
//   return {
//     props: {
//       posts: await getAllPosts(),
//     },
//   };
// }

// const canvas = styled.div `
//
//   ${media('<=desktop')} {
//     iframe {
//       width: 300px; !important;
//       height: 300px; !important;
//     }
//   }
// `