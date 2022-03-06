import React from "react";
import Svg, { Color, G, Rect } from "react-native-svg";

const MoreIcon = (props: { color: Color | undefined }) => {
  return (
    <Svg width="24" height="21" viewBox="0 0 24 21">
      <G fill="none" fillRule="evenodd">
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
