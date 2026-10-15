<script setup lang="ts">
// ============ PERSONALIZAÇÃO ============
const site = {
  marca: 'Sua Marca',
  curso: 'Programa Método',
  mentor: 'Nome do Mentor',
  checkout: '#', // link do checkout (Hotmart, Kiwify, Eduzz…)
  preco: 997,
  parcelas: 12,
  precoDe: 1997,
  // fim da turma/oferta (data real). O contador some quando a data passa.
  prazo: '2026-12-31T23:59:00-03:00',
  videoId: '', // ID do vídeo de vendas no YouTube (VSL)
  cnpj: '00.000.000/0000-00',
  whatsapp: '5500000000000',
  instagram: '#',
}
const parc = computed(() => (site.preco * 1.18 / site.parcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) // juros aproximados; ajuste ao checkout
const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

const ehPara = ['Está começando do zero e quer um caminho claro', 'Tem pouco tempo e precisa de método, não de teoria solta', 'Quer acompanhamento para tirar dúvidas de verdade', 'Está disposto a aplicar o que aprende toda semana']
const naoEhPara = ['Procura resultado sem esforço ou em poucos dias', 'Não pode dedicar ao menos 3 horas por semana', 'Já domina o assunto e busca conteúdo avançado', 'Quer só assistir, sem colocar em prática']
const modulos = [
  { t: 'Fundamentos', a: 6, d: 'A base que separa quem avança de quem trava: conceitos, ferramentas e a primeira entrega guiada.' },
  { t: 'Método na prática', a: 8, d: 'O passo a passo aplicado em casos reais, com modelos prontos para você adaptar.' },
  { t: 'Primeiros resultados', a: 7, d: 'Como colocar o que aprendeu no mundo e medir o que funciona.' },
  { t: 'Escala e rotina', a: 5, d: 'Organização semanal, automações e como manter consistência.' },
  { t: 'Mentorias ao vivo', a: 8, d: 'Encontros quinzenais para revisar o seu trabalho e destravar dúvidas.' },
]
const bonus = [
  { t: 'Kit de modelos prontos', v: 297 },
  { t: 'Comunidade exclusiva de alunos', v: 397 },
  { t: 'Aula extra: erros que atrasam o começo', v: 147 },
]
const faq = [
  { q: 'Por quanto tempo tenho acesso?', a: 'Acesso por 12 meses a todas as aulas e atualizações.' },
  { q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia incondicional. Pede o reembolso pela plataforma e recebe 100% do valor.' },
  { q: 'As mentorias ficam gravadas?', a: 'Sim. Todas as mentorias ao vivo ficam disponíveis na área do aluno.' },
  { q: 'Preciso de experiência?', a: 'Não. O programa começa do zero.' },
]

const aberto = ref<number | null>(0)
const restante = ref<{ d: string; h: string; m: string; s: string } | null>(null)
onMounted(() => {
  const fim = new Date(site.prazo).getTime()
  const pad = (n: number) => String(n).padStart(2, '0')
  const tick = () => {
    const ms = fim - Date.now()
    if (ms <= 0) { restante.value = null; return }
    restante.value = { d: pad(Math.floor(ms / 864e5)), h: pad(Math.floor(ms / 36e5) % 24), m: pad(Math.floor(ms / 6e4) % 60), s: pad(Math.floor(ms / 1e3) % 60) }
  }
  tick(); const t = setInterval(tick, 1000); onBeforeUnmount(() => clearInterval(t))
})
const tocando = ref(false)
</script>

<template>
  <div>
    <div class="aurora" aria-hidden="true"><span /><span /></div>

    <header class="top"><div class="wrap top-in"><a href="#" class="logo">{{ site.marca }}</a><a class="btn btn-ghost btn-sm" href="#oferta">Garantir vaga</a></div></header>

    <main>
      <section class="hero">
        <div class="wrap hero-in">
          <p class="chip"><span class="live" />Turma aberta · vagas por ordem de inscrição</p>
          <h1>Do zero ao primeiro resultado em <span class="grad">8 semanas</span>, com acompanhamento de perto.</h1>
          <p class="lead">O {{ site.curso }} junta aulas diretas, mentorias ao vivo e uma comunidade que cobra a sua evolução.</p>

          <div class="vsl">
            <iframe v-if="tocando && site.videoId" :src="`https://www.youtube-nocookie.com/embed/${site.videoId}?autoplay=1&rel=0`" title="Vídeo de apresentação" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen />
            <button v-else type="button" class="vsl-poster" :disabled="!site.videoId" @click="tocando = true">
              <span class="play" /><span class="vsl-cap">{{ site.videoId ? 'Assista antes de decidir · 12 min' : 'Seu vídeo de vendas aqui' }}</span>
            </button>
          </div>

          <div v-if="restante" class="count" role="timer" aria-label="Tempo até o fim da oferta">
            <p>A condição especial termina em</p>
            <div class="count-n"><span><b>{{ restante.d }}</b>dias</span><span><b>{{ restante.h }}</b>horas</span><span><b>{{ restante.m }}</b>min</span><span><b>{{ restante.s }}</b>seg</span></div>
          </div>
          <a class="btn btn-main btn-lg" href="#oferta">Quero entrar na turma</a>
        </div>
      </section>

      <section class="sec">
        <div class="wrap fit">
          <div class="fit-col yes"><h2>É para você se…</h2><ul><li v-for="t in ehPara" :key="t">{{ t }}</li></ul></div>
          <div class="fit-col no"><h2>Não é para você se…</h2><ul><li v-for="t in naoEhPara" :key="t">{{ t }}</li></ul></div>
        </div>
      </section>

      <section class="sec">
        <div class="wrap mod-grid">
          <div><h2>O que você vai aprender</h2><p class="muted">{{ modulos.reduce((s, m) => s + m.a, 0) }} aulas em {{ modulos.length }} módulos, liberados em sequência.</p></div>
          <div class="mods">
            <div v-for="(m, i) in modulos" :key="m.t" class="mod" :class="{ open: aberto === i }">
              <button type="button" :aria-expanded="aberto === i" @click="aberto = aberto === i ? null : i">
                <span class="mod-n">M{{ i + 1 }}</span><span class="mod-t">{{ m.t }}</span><span class="mod-a">{{ m.a }} aulas</span><span class="mod-x" />
              </button>
              <div class="mod-body"><p>{{ m.d }}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section class="sec">
        <div class="wrap mentor">
          <div class="ph"><span>Foto do mentor</span></div>
          <div>
            <p class="k">Quem conduz</p>
            <h2>{{ site.mentor }}</h2>
            <p class="bio">[Mini bio: trajetória, o que construiu e por que ensina.] Mais de [00] anos de mercado e [0.000] alunos formados em turmas anteriores.</p>
            <ul class="marks"><li><b>0.000+</b>alunos</li><li><b>00</b>turmas</li><li><b>4,9</b>nota média</li></ul>
          </div>
        </div>
      </section>

      <section class="sec">
        <div class="wrap">
          <h2>E ainda leva de presente</h2>
          <div class="bonus">
            <div v-for="(b, i) in bonus" :key="b.t" class="bonus-item"><span class="bonus-n">Bônus {{ i + 1 }}</span><b>{{ b.t }}</b><s>{{ brl(b.v) }}</s></div>
          </div>
        </div>
      </section>

      <section id="oferta" class="sec">
        <div class="wrap">
          <div class="price">
            <div class="price-l">
              <p class="k">{{ site.curso }} + bônus</p>
              <p class="from">De <s>{{ brl(site.precoDe) }}</s> por</p>
              <p class="big"><small>{{ site.parcelas }}x de</small>{{ parc }}</p>
              <p class="cash">ou {{ brl(site.preco) }} à vista</p>
              <a class="btn btn-main btn-lg" :href="site.checkout">Quero garantir minha vaga</a>
              <p class="secure">Pagamento seguro · Acesso imediato por e-mail</p>
            </div>
            <div class="seal"><b>7</b><span>dias de<br>garantia</span><p>Se não for para você, devolvemos 100% do valor. Sem perguntas.</p></div>
          </div>
        </div>
      </section>

      <section class="sec faq">
        <div class="wrap faq-in">
          <h2>Perguntas frequentes</h2>
          <div><details v-for="f in faq" :key="f.q"><summary>{{ f.q }}</summary><p>{{ f.a }}</p></details></div>
        </div>
      </section>
    </main>

    <footer class="foot rod">
      <div class="wrap rod-top">
        <div class="rod-brand">
          <b class="rod-logo">{{ site.marca }}</b>
          <p>CNPJ {{ site.cnpj }}</p><p>Resultados dependem da aplicação de cada aluno.</p>
        </div>
        <div class="rod-soc">
          <a :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M12 2.2a9.7 9.7 0 0 0-8.3 14.7L2.3 21.8l5-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.5-.4Z"/></svg></a>
          <a :href="site.instagram" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6"/></svg></a>
        </div>
      </div>
      <div class="wrap"><div class="rod-bot">
        <span>© {{ new Date().getFullYear() }} {{ site.marca }}. Todos os direitos reservados.</span>
        <a class="rod-credit" href="https://www.ontrackagenciadigital.com.br/" target="_blank" rel="noopener">Desenvolvido por <b>OnTrack Agência Digital</b></a>
      </div></div>
    </footer>
  </div>
</template>
