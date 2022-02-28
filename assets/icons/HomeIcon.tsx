import React from 'react';
import Svg, {Color, G, Path} from 'react-native-svg';

const HomeIcon = (props: {color: Color | undefined}) => {
  return (
    <Svg width="15" height="16" viewBox="0 0 15 16">
      <G fill="none" fill-rule="evenodd">
        <G fill={props.color} fill-rule="nonzero">
          <G>
            <G>
              <G>
                <G>
                  <G>
                    <Path
                      d="M299.5 3L292 8.714 292 19 297.063 19 297.063 13.667 301.938 13.667 301.938 19 307 19 307 8.714z"
                      transform="translate(-326 -778) translate(0 767) translate(34 8)"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default HomeIcon;
