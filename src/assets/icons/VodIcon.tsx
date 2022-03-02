import React from 'react';
import Svg, {Color, G, Path} from 'react-native-svg';

const VodIcon = (props: {color: Color | undefined}) => {
  return (
    <Svg width="23" height="15" viewBox="0 0 23 15">
      <G fill="none" fillRule="evenodd">
        <G fill={props.color} fillRule="nonzero">
          <G>
            <G>
              <G>
                <G>
                  <G>
                    <Path
                      d="M142 6v11c0 1.105.895 2 2 2h19c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2h-19c-1.105 0-2 .895-2 2zm9 2l6 3.5-6 3.5V8z"
                      transform="translate(-176 -779) translate(0 767) translate(34 8)"
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

export default VodIcon;
