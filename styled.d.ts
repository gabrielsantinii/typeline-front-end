import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryBackground: string;
      primaryText: string;
      secondaryText: string;
      hoverPrimaryText: string;
      highlight: string;
      hoverHighlight: string;
      tercearyText: string;
    };
  }
}
