// global.d.ts
declare module 'scrollmagic';
declare module 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
declare module 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

interface Window {
  TweenMax: any;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
