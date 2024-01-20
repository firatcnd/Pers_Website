import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface LinkProps {
  href: string;
}

export default function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return (
    <NextLink href={href} passHref>
      <Anchor>{children}</Anchor>
    </NextLink>
  );
}

const Anchor = styled.a`
  display: inline;
  width: fit-content;
  text-decoration: none;

  background: linear-gradient(#8e6edb, #8e6edb);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% 0px;
  transition: 100ms;
  transition-property: background-size, text-decoration, color;
  color: #8e6edb;

  &:hover {
    background-size: 100% 100%;
    text-decoration: none;
    color: white;
  }

  &:active {
    color: #8e6edb;
    background-size: 100% 100%;
  }
`;
