import React from 'react';
import Svg, {Color, G, Rect} from 'react-native-svg';

const MoreIcon = (props: {color: Color | undefined}) => {
  return (
    <Svg width="24" height="21" viewBox="0 0 24 21">
      <G fill="none" fill-rule="evenodd">
        <G>
          <G>
            <G>
              <G>
                <G>
                  <G>
                    <G>
                      <G transform="translate(-34 -773) translate(0 767) translate(34 8)">
                        <Rect
                          width="17"
                          height="2"
                          y="5"
                          fill={props.color}
                          rx="1"
                        />
                        <Rect
                          width="17"
                          height="2"
                          y="11"
                          fill={props.color}
                          rx="1"
                        />
                        <Rect
                          width="17"
                          height="2"
                          y="17"
                          fill={props.color}
                          rx="1"
                        />
                        {/* <Circle
                          cx="16.5"
                          cy="6"
                          r="6.5"
                          fill="#02F784"
                          stroke="#141414"
                          stroke-width="2"
                        />
                        <Path
                          fill="#000"
                          fill-rule="nonzero"
                          d="M16.344 9V4.96h-.984v-.752c.664 0 1.056-.368 1.224-.904h.856V9h-1.096z"
                        /> */}
                      </G>
                    </G>
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

export default MoreIcon;
