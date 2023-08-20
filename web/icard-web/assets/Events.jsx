import React from "react";
import Svg, { Path } from "react-native-svg";

function Events() {
  return (
    <Svg width={48} height={45} xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M36.738 20.25H10.496v4.5h26.242v-4.5ZM41.986 4.5h-2.624V0h-5.248v4.5H13.12V0H7.872v4.5H5.248C2.335 4.5.026 6.525.026 9L0 40.5c0 1.194.553 2.338 1.537 3.182.984.844 2.32 1.318 3.711 1.318h36.738c2.886 0 5.248-2.025 5.248-4.5V9c0-2.475-2.362-4.5-5.248-4.5Zm0 36H5.248V15.75h36.738V40.5Zm-13.12-11.25h-18.37v4.5h18.37v-4.5Z"
        fill="#2E6933"
      />
    </Svg>
  );
}

export default Events;
