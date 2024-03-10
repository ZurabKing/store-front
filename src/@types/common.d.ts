declare module "*.scss";

declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}

declare type NonEmptyArray<T> = [T, ...T[]];
