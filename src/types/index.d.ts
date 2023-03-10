declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
  
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
  
declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}
  
declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
}
  
declare module '*.module.styl' {
    const classes: { [key: string]: string };
    export default classes;
}