// global.d.ts
declare module 'scrollmagic';
declare module 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
declare module 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

interface Window {
  TweenMax: any;
}
