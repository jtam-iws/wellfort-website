// twin.d.ts
import 'twin.macro';
import styledImport, { CSSProp, css as cssImport } from 'styled-components';
import type { TwStyle } from 'twin.macro';

export type FpStyle = Array<TwStyle | null | boolean | string>;

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp | FpStyle;
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp | FpStyle;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}
