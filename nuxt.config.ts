// Modelo 06 · Cursos e mentorias — On Track LP
// Endereço público do site (usado na prévia do WhatsApp/Instagram). Em domínio próprio: LP_URL=https://www.cliente.com.br/
const SITE = process.env.LP_URL || 'https://devagenciaontrack-sys.github.io/lp-modelo-06-ontrack/'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    // GitHub Pages: LP_BASE=/<repo>/ · Vercel/domínio próprio: deixe vazio
    baseURL: process.env.LP_BASE || '/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Sua Marca — Do zero ao primeiro resultado em 8 semanas',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Programa prático com aulas, mentorias ao vivo e comunidade. Garantia de 7 dias.' },
        { name: 'theme-color', content: '#08070D' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sua Marca — Do zero ao primeiro resultado em 8 semanas' },
        { property: 'og:description', content: 'Programa prático com aulas, mentorias ao vivo e comunidade. Garantia de 7 dias.' },
        { property: 'og:url', content: SITE },
        { property: 'og:image', content: SITE + 'og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap' },
        { rel: 'icon', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%2308070D'/%3E%3Cpath d='M18 44 32 16l14 28' fill='none' stroke='%23A78BFF' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" },
      ],
    },
  },
})
