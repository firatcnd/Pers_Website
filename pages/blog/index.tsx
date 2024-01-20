import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import { media } from 'utils/media';

export default function BlogIndexPage() {
  return (
    <Page
      title="My SaaS Startup Blog"
      description="Culpa duis reprehenderit in ex amet cillum nulla do in enim commodo. Sunt ut excepteur et est aliqua anim ea excepteur fugiat voluptate. Fugiat exercitation dolore laboris do quis consectetur eiusmod tempor consequat."
    >
      <CustomAutofitGrid>
      </CustomAutofitGrid>
    </Page>
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

  .article-card-wrapper {
    max-width: 100%;
  }
`;

// export async function getStaticProps() {
//   return {
//     props: {
//       posts: await getAllPosts(),
//     },
//   };
// }
