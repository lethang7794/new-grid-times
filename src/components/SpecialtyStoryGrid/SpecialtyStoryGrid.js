import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStoryWrapper>
              <MiniStory key={data.id} {...data} />
            </MiniStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 32px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: -16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
  grid-gap: 16px;
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    overflow: auto;
  }
`;

const MiniStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    flex: 1 0 220px;
  }
`;

export default SpecialtyStoryGrid;
