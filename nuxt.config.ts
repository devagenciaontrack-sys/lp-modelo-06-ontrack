// Modelo 06 · Cursos e mentorias — On Track LP
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
