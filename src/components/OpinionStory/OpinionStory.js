import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt='' src={avatar} />
        <AuthorName>{author}</AuthorName>
        <ArticleTitle>{title}</ArticleTitle>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-template-rows: auto;
  grid-template-areas:
    'author-name avatar'
    'article-title avatar';
  grid-column-gap: 16px;

  @media ${QUERIES.tabletOnly} {
    display: block;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: avatar;

  @media ${QUERIES.tabletOnly} {
    margin-bottom: 8px;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 7px;
  grid-area: author-name;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: ${22 / 16}rem;
  grid-area: article-title;
`;

export default OpinionStory;
