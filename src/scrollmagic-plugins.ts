// scrollmagic-plugins.ts
import ScrollMagic from 'scrollmagic';
import { TweenMax } from 'gsap'; // ✅ gsap@2 only
// @ts-ignore
window.TweenMax = TweenMax;

import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default ScrollMagic;

