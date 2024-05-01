declare interface Window {
  Babel: any;
  define: any;
}
declare module '*.less' {
  const className: { [key: string]: any };
  export default className;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg';
declare module '*.gif';

declare global {
  const __DEV__: boolean;
}

declare const VERSION: string;
