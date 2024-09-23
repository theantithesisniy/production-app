declare module '*.scss' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames;
  export = classNames;
}
declare module "*png";
declare module "*jpg";
declare module "*jpeg";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}