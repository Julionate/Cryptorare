// icon:close | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { cssInterop } from "nativewind";
cssInterop(Svg, {
  className: {
    target: "style",
    nativeStyleToProp: { width: true, height: true },
  },
});

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
    </Svg>
  );
}

export default IconClose;
