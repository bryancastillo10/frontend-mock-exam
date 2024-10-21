declare module "*.svg" {
  import * as React from "react";

  // Define a functional component that accepts any props
  const content: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default content;
}
