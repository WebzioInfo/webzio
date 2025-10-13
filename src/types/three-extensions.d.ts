// src/types/three-extensions.d.ts
declare module 'three/examples/jsm/loaders/SVGLoader' {
  import { Loader, LoadingManager, ShapePath } from 'three'

  export class SVGLoader extends Loader {
    constructor(manager?: LoadingManager)
    load(
      url: string,
      onLoad: (data: any) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void
    parse(data: string): {
      paths: ShapePath[]
      xml: Document
    }
    static createShapes(shapePath: ShapePath): THREE.Shape[]
  }
}
