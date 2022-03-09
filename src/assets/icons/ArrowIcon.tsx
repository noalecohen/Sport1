import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const ArrowIcon = () => {
  return (
    <Svg width="6" height="10" viewBox="0 0 6 10">
      <G
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <G stroke="#4E4E4E" strokeWidth="1.5">
          <Path
            d="M27 143L31 147 35 143"
            transform="translate(-28 -140) rotate(90 31 145)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default ArrowIcon;
