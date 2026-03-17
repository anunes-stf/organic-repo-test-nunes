<script setup>
import { Worm } from 'lucide-vue-next'
</script>

<template>
  <article class="page">
    <header class="header">
      <Worm class="icon-titulo" aria-hidden="true" />
      <h1>Curiosidades sobre minhocas</h1>
      <p class="lead">
        Conheça o habitat, as características e o papel das minhocas no ecossistema.
      </p>
    </header>

    <section class="secao">
      <h2>Habitat</h2>
      <p>
        Minhocas vivem no solo, em ambientes úmidos e ricos em matéria orgânica.
        Preferem solos fofos e evitam exposição direta ao sol e à seca, pois
        respiram pela pele e precisam de umidade. São encontradas em jardins,
        florestas, pastagens e áreas agrícolas, em camadas que vão da superfície
        até cerca de um metro de profundidade, dependendo da espécie e das
        condições do solo.
      </p>
    </section>

    <section class="secao">
      <h2>Características</h2>
      <p>
        As minhocas são anelídeos: o corpo é segmentado em anéis (metâmeros).
        Não possuem esqueleto nem patas; movem-se por contrações musculares e
        pequenas cerdas (quetas). A respiração é cutânea — trocam gases pela
        pele, que deve permanecer úmida. São hermafroditas (têm órgãos
        masculinos e femininos) e muitas espécies conseguem regenerar partes do
        corpo. O tamanho varia de poucos centímetros a mais de um metro em
        algumas espécies tropicais.
      </p>
    </section>

    <section class="secao">
      <h2>Funções no ecossistema</h2>
      <ul class="lista-funcoes">
        <li>
          <strong>Aeração do solo:</strong> os túneis que cavam permitem a
          entrada de ar e água, melhorando a estrutura e a drenagem do solo.
        </li>
        <li>
          <strong>Fertilização:</strong> o húmus produzido nas fezes é rico em
          nutrientes e melhora a fertilidade e a retenção de água.
        </li>
        <li>
          <strong>Decomposição:</strong> alimentam-se de matéria orgânica em
          decomposição (folhas, restos de plantas), acelerando a ciclagem de
          nutrientes.
        </li>
        <li>
          <strong>Cadeia alimentar:</strong> servem de alimento para aves,
          mamíferos, répteis e outros animais, sendo importantes na base da
          cadeia trófica do solo.
        </li>
      </ul>
    </section>

    <nav class="nav-voltar">
      <router-link to="/" class="link">← Voltar ao início</router-link>
    </nav>
  </article>
</template>

<style scoped>
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
  text-align: left;
}

.header {
  margin-bottom: 2.5rem;
}

.icon-titulo {
  width: 48px;
  height: 48px;
  color: var(--accent);
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.125rem;
  color: var(--text);
  margin-top: 0.5rem;
}

.secao {
  margin-bottom: 2rem;
}

.secao h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-h);
}

.secao p {
  line-height: 1.6;
  margin: 0;
}

.lista-funcoes {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lista-funcoes li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
  line-height: 1.6;
}

.lista-funcoes li:last-child {
  border-bottom: none;
}

.nav-voltar {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.link {
  color: var(--accent);
  text-decoration: none;
  font-size: 0.9375rem;
}

.link:hover {
  text-decoration: underline;
}
</style>
