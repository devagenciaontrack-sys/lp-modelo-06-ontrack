# Modelo 06 — Cursos e mentorias · On Track LP

Landing page modelo da **On Track**, feita em **Nuxt 4** (Vue). Sem marca: pronta para personalizar e vender.

- **Demonstração:** https://devagenciaontrack-sys.github.io/lp-modelo-06-ontrack/

## Como personalizar
Quase tudo fica no bloco **PERSONALIZAÇÃO** no topo de `app/app.vue` (`const site = {...}`): marca, WhatsApp, links, preços, endereços e dados legais. Os textos e listas (seções, FAQ, depoimentos) ficam logo abaixo, em arrays.
- **Cores e fontes:** variáveis no topo de `app/assets/css/main.css` e o link do Google Fonts em `nuxt.config.ts`.
- **Imagens:** os blocos marcados como "Foto…" são espaços reservados; troque por `<img>` com as fotos do cliente.
- **Título e descrição do Google:** `nuxt.config.ts` → `app.head`.
- **Depoimentos e avaliações:** os textos são de exemplo; substitua por avaliações reais e autorizadas antes de publicar.

## Rodar e publicar
```
npm install
npm run dev        # http://localhost:3000
npm run generate   # site estático em .output/public
```
- **Vercel:** importe o repositório; a Vercel detecta o Nuxt sozinha. Não defina `LP_BASE`.
- **GitHub Pages (demonstração):** `LP_BASE=/lp-modelo-06-ontrack/ npm run generate` e publique `.output/public` no branch `gh-pages`.

## Briefing para o cliente
PDF com tudo o que precisamos do cliente para montar o site: [baixar o briefing](Briefing-Modelo-06-Cursos-e-mentorias.pdf?raw=1)

## Prévia ao compartilhar
A imagem `public/og.jpg` aparece quando o link é enviado no WhatsApp ou no Instagram. Em domínio próprio, gere com `LP_URL=https://www.dominio-do-cliente.com.br/` para a prévia apontar para o endereço certo, e troque o `og.jpg` por um print do site final.
