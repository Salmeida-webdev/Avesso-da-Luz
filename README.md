# Avesso da Luz — Estúdio de Beleza

Site institucional conceitual de portfólio, feito com Next.js App Router, TypeScript, CSS Modules e Motion for React. O projeto usa exportação estática para publicação na Netlify.

## Rodar localmente

```powershell
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar e gerar a versão estática

```powershell
npm run typecheck
npm run build
```

O site publicado será gerado na pasta `out/`.

## Netlify

O arquivo `netlify.toml` configura `npm run build` e a pasta `out`. Antes da publicação pública, defina `NEXT_PUBLIC_SITE_URL` com o domínio real para que sitemap e robots apontem para o endereço correto. O endereço `.example` usado como fallback é reservado para documentação.

## Conteúdo conceitual

- O projeto não declara endereço, preços, horários, profissionais, avaliações ou credenciais reais.
- As imagens de beleza foram geradas para este conceito e não retratam clientes reais.
- Os links de serviço iniciam conversa pelo WhatsApp; não existe agenda ou reserva automática.
- O contato configurado é `+55 83 99873-9712`.
- A marca e a disponibilidade de domínio/registro devem ser verificadas antes de qualquer uso comercial.

## Acessibilidade e desempenho

- Navegação por teclado com foco visível, link para pular ao conteúdo e menu móvel com estado acessível.
- Animações Motion respeitam a preferência de movimento reduzido.
- Fontes servidas localmente; imagens são assets locais dimensionados para a página.
- HTML semântico, textos alternativos, dimensões responsivas e carregamento prioritário apenas da imagem hero.

## Identidade visual

O logotipo vetorial está em `public/logo-avesso.svg`; versões PNG transparente ficam em `public/brand/`.
