import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <DesktopUserActions>
          <Button>Subscribe</Button>
          <Link href=''>Already a subscriber?</Link>
        </DesktopUserActions>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 98px;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 80px;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const DesktopUserActions = styled.div`
  align-self: flex-end;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const Link = styled.a`
  color: var(--color-gray-900);
  font-style: italic;
  font-weight: var(--weight-normal);
  font-size: ${14 / 16}rem;
`;

export default Header;
