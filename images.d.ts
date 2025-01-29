// Declarations for handling SVG, PNG, and JPG files

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: any; // or you can use string if you prefer
  export default content;
}

declare module '*.jpg' {
  const content: any; // or you can use string if you prefer
  export default content;
}
