import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';


export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Hakkımda</CustomOverTitle>
        <Heading>Merhaba! Ben <span style={{color: '#8e6edb', fontSize: '7rem'}}>Fırat Can Demirel</span></Heading>
        <Description>
          Ben Frontend-web Developer ve UI/UX Developer'ım. Yeni diller öğrenip proje kurcalamayı çok seviyorum.
        </Description>
        <CustomButtonGroup>
          <NextLink href="/contact" passHref>
            <Button onClick={() => setIsModalOpened(false)}>
              İLETİŞİM <span>&rarr;</span>
            </Button>
          </NextLink>
          <NextLink href="FCD_Cv_LAST.pdf" passHref>
            <Button transparent>
              Cv Görüntüle <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        {/*<HeroIllustration />*/}
        {/*<img src="../../assets/yeni-pqq.png"/>*/}
        {/*<Rive
          src="cat.riv"
          stateMachines="bumpy"
        />*/}
{/*
        <iframe style={{border: "none"}} width="600" height="600" src="https://rive.app/community/5504-10856-cute-slider/embed" allowFullScreen></iframe>
*/}
        <iframe className="Image_Hero" style={{border: 'none' , borderRadius: '25px', boxShadow:'0px 0px 38px -1px #8e6edb'}} width="600" height="600" src="https://rive.app/community/4283-8836-developer/embed" ></iframe>
      </ImageContainer>
    </HeroWrapper>
  );
}



const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    };
    .Image_Hero{
      width: 300px !important;
      height: 300px !important;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
