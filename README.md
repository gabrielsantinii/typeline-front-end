# Typeline - Next.js, Typescript e Styled Components

Este tutorial visa ajudá-lo, na prática, a construir um projeto utilizando as tecnologias de ponta: Next.js, Typescript e Styled Components.

Para isso, faremos juntos uma rede social chamada Typeline. Nela, autores poderão discutir tudo relacionado a Typescript.

Com o objetivo de trilharmos esse caminho, dividimos esse tutorial em cinco principais capítulos:

- Configuração;
- Desenvolvimento;
- Refatoração;
- Publicação;
- Revisão.

---

# Configuração

Aqui veremos a parte estrutural da aplicação. Neste capítulo, você entenderá como inicializar projetos Next.js utilizando Typescript e Styled Components. 

É importante deixar claro que haverão novas configurações pontuais com o desenvolvimento do projeto. Lembre-se: You Ain't Gonna Need It [(YAGNI)](https://pt.wikipedia.org/wiki/YAGNI)

## Inicialização com Typescript

O primeiro passo é a inicialização do App com `create-next-app`. Abra seu terminal e digite o seguinte comando:

```bash
yarn create next-app nome-da-aplicacao --typescript
```

## Instalação do Styled Components

Styled Components será nossa base para a estilização do projeto. Para tanto, precisamos instalá-lo.

```bash
yarn add styled-components && yarn add @types/styled-components -D
```

> Obs: todas as dependências `@types` serão relacionadas a utilização da dependência integrada ao `Typescript`.
> 

## Configuração do Styled Components

Pelo `Next.js` trabalhar com SSR, precisamos de algumas configurações adicionais no Styled Components.

1. Adicionar o `babel-plugin-styled-components` como dependência de desenvolvimento.

```bash
yarn add babel-plugin-styled-components -D
```

1. Configurar o Next.js para receber a estilização em SSR.
    1. Crie o arquivo `_document.tsx` na pasta `pages`.

```tsx
import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
```

## Conclusão - Configuração

Até o momento, realizamos a parte de configuração, que não envolve conceito ou algo do gênero, mas apenas prepara nosso ambiente para podermos decolar.
