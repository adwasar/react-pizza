import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="254" rx="10" ry="10" width="280" height="27" />
    <circle cx="135" cy="115" r="115" />
    <rect x="1" y="305" rx="10" ry="10" width="280" height="88" />
    <rect x="1" y="425" rx="10" ry="10" width="90" height="27" />
    <rect x="125" y="417" rx="22" ry="22" width="150" height="43" />
  </ContentLoader>
);

export default MyLoader;
