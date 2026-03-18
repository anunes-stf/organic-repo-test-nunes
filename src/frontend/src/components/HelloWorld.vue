<script setup>
import { RouterLink } from 'vue-router'
import { Worm, Sprout, Shovel, Heart } from 'lucide-vue-next'

const fotos = [
  {
    src: 'https://images.unsplash.com/photo-1669569713247-3c57d88dd18f?w=800&q=82&auto=format&fit=crop',
    alt: 'Minhoca em close no solo',
    legenda: 'Modelando a passarela de barro',
  },
  {
    src: 'https://images.unsplash.com/photo-1708191225887-0642eb28f6ac?w=800&q=82&auto=format&fit=crop',
    alt: 'Minhoca rastejando na terra',
    legenda: 'Close de quem não usa filtro',
  },
  {
    src: 'https://images.unsplash.com/photo-1623939646032-e6bdceceb673?w=800&q=82&auto=format&fit=crop',
    alt: 'Folhas secas sobre solo rico em matéria orgânica',
    legenda: 'Buffet orgânico todo dia',
  },
]

const ideias = [
  {
    icon: Sprout,
    texto:
      'Sem Wi‑Fi no subsolo, mas o sinal de nutrientes é sempre cinco barras.',
  },
  {
    icon: Shovel,
    texto:
      'Home office subterrâneo desde antes existir LinkedIn: escavam, pausam, escavam de novo.',
  },
  {
    icon: Heart,
    texto:
      'Hermafroditas no encontro: os dois levam flores… digo, restos de folha.',
  },
  {
    icon: Worm,
    texto:
      'Regeneram pedaços do corpo. Se humano fizesse isso, viraria reality show.',
  },
]
</script>

<template>
  <div class="home">
    <div class="solo-bg" aria-hidden="true" />

    <header class="topo">
      <div class="mascotes" aria-hidden="true">
        <Worm class="icone onda-1" />
        <div class="minhoca-feliz-wrap">
          <svg
            class="svg-minhoca-feliz"
            viewBox="0 0 272 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              class="solo-sombra"
              cx="136"
              cy="88"
              rx="118"
              ry="10"
              fill="#3d2914"
              opacity="0.12"
            />
            <g class="minhoca-corpo-inteiro">
              <g class="seg-base" transform="translate(38,56)">
                <g class="seg-ondula d0">
                  <ellipse rx="15" ry="19" fill="#a86b5a" />
                </g>
              </g>
              <g class="seg-base" transform="translate(68,50)">
                <g class="seg-ondula d1">
                  <ellipse rx="16" ry="21" fill="#b57465" />
                </g>
              </g>
              <g class="seg-base" transform="translate(100,46)">
                <g class="seg-ondula d2">
                  <ellipse rx="17" ry="22" fill="#c17f6a" />
                </g>
              </g>
              <g class="seg-base" transform="translate(134,44)">
                <g class="seg-ondula d3">
                  <ellipse rx="17" ry="22" fill="#c17f6a" />
                </g>
              </g>
              <g class="seg-base" transform="translate(168,46)">
                <g class="seg-ondula d4">
                  <ellipse rx="16" ry="21" fill="#c17f6a" />
                </g>
              </g>
              <g class="seg-base cabeca-minhoca" transform="translate(208,44)">
                <g class="seg-ondula d5">
                  <ellipse rx="22" ry="26" fill="#c17f6a" />
                  <ellipse
                    cx="-4"
                    cy="-2"
                    rx="18"
                    ry="20"
                    fill="#d49284"
                    opacity="0.45"
                  />
                  <circle cx="-10" cy="-6" r="4" fill="#3d2914" />
                  <circle cx="10" cy="-6" r="4" fill="#3d2914" />
                  <circle cx="-9" cy="-7" r="1.4" fill="#fff" />
                  <circle cx="11" cy="-7" r="1.4" fill="#fff" />
                  <path
                    d="M-14 8 Q0 20 14 8"
                    fill="none"
                    stroke="#3d2914"
                    stroke-width="2.8"
                    stroke-linecap="round"
                  />
                  <circle cx="-16" cy="4" r="4" fill="#e8a0a0" opacity="0.65" />
                  <circle cx="16" cy="4" r="4" fill="#e8a0a0" opacity="0.65" />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <Worm class="icone onda-2" />
      </div>
      <h1 class="titulo">Terra das Minhocas</h1>
      <p class="sub">
        O cantinho da internet onde quem manda é quem come terra e ainda ganha
        aplauso do ecossistema.
      </p>
    </header>

    <section class="galeria" aria-label="Imagens sobre minhocas e solo">
      <figure v-for="(f, i) in fotos" :key="i" class="card-foto">
        <img :src="f.src" :alt="f.alt" loading="lazy" decoding="async" />
        <figcaption>{{ f.legenda }}</figcaption>
      </figure>
    </section>

    <section class="ideias" aria-label="Curiosidades engraçadas">
      <h2 class="sec-titulo">Pensamentos de quem vive no escuro</h2>
      <ul class="lista-ideias">
        <li v-for="(item, i) in ideias" :key="i" class="item-ideia">
          <component :is="item.icon" class="item-icone" aria-hidden="true" />
          <span>{{ item.texto }}</span>
        </li>
      </ul>
    </section>

    <p class="cta-texto">
      Quer o modo sério com habitat, biologia e ecossistema?
    </p>
    <nav class="nav-curiosidades">
      <RouterLink to="/curiosidades-minhocas" class="link-curiosidades">
        Curiosidades sobre minhocas →
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.home {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.25rem 2.5rem;
  position: relative;
  overflow: hidden;
}

.solo-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    165deg,
    var(--worm-grad-1) 0%,
    var(--worm-grad-2) 35%,
    var(--worm-grad-3) 70%,
    var(--worm-grad-4) 100%
  );
  z-index: 0;
  pointer-events: none;
}

.solo-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 20% 80%,
      var(--worm-radial-1) 0%,
      transparent 45%
    ),
    radial-gradient(
      circle at 85% 20%,
      var(--worm-radial-2) 0%,
      transparent 40%
    );
}

.topo,
.galeria,
.ideias,
.cta-texto,
.nav-curiosidades {
  position: relative;
  z-index: 1;
}

.topo {
  text-align: center;
  max-width: 36rem;
  margin-bottom: 2rem;
}

.mascotes {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.icone {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--worm-icone);
}

.onda-1 {
  animation: ondula 2.2s ease-in-out infinite;
}

.onda-2 {
  animation: ondula 2.2s ease-in-out 0.5s infinite;
}

@keyframes ondula {
  0%,
  100% {
    transform: translateY(0) rotate(-5deg);
  }
  50% {
    transform: translateY(-6px) rotate(5deg);
  }
}

.minhoca-feliz-wrap {
  width: min(220px, 72vw);
  max-height: 100px;
<<<<<<< HEAD
  filter: drop-shadow(0 6px 10px var(--worm-drop));
=======
  filter: drop-shadow(0 6px 10px rgba(44, 32, 24, 0.12));
>>>>>>> github/main
}

.svg-minhoca-feliz {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: bottom;
}

.minhoca-corpo-inteiro {
  animation: minhoca-flutua 2.4s ease-in-out infinite;
  transform-origin: 136px 70px;
}

@keyframes minhoca-flutua {
  0%,
  100% {
    transform: translateY(0) rotate(-2deg);
  }
  50% {
    transform: translateY(-6px) rotate(2deg);
  }
}

.seg-ondula {
  animation: ondula-segmento 0.65s ease-in-out infinite;
  transform-origin: center center;
}

.d0 {
  animation-delay: 0s;
}
.d1 {
  animation-delay: 0.08s;
}
.d2 {
  animation-delay: 0.16s;
}
.d3 {
  animation-delay: 0.24s;
}
.d4 {
  animation-delay: 0.32s;
}
.d5 {
  animation-delay: 0.4s;
}

@keyframes ondula-segmento {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .minhoca-corpo-inteiro,
  .seg-ondula {
    animation: none;
  }
}

.titulo {
  font-family: var(--heading);
  font-size: clamp(1.75rem, 5vw, 2.35rem);
  color: var(--worm-titulo);
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.sub {
  margin: 0;
  color: var(--worm-sub);
  line-height: 1.5;
}

.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  margin-bottom: 2.25rem;
}

.card-foto {
  margin: 0;
  background: var(--worm-card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--worm-card-border);
  box-shadow: 0 8px 24px var(--worm-card-shadow);
}

.card-foto img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.card-foto figcaption {
  padding: 0.65rem 0.85rem;
  font-size: 0.9rem;
  color: var(--worm-figcap);
  text-align: left;
  font-style: italic;
}

.ideias {
  width: 100%;
  max-width: 640px;
  margin-bottom: 1.5rem;
}

.sec-titulo {
  font-size: 1.15rem;
  color: var(--worm-sec-titulo);
  margin: 0 0 1rem;
  text-align: center;
}

.lista-ideias {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.item-ideia {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  text-align: left;
  padding: 1rem 1.1rem;
  background: var(--worm-item-bg);
  border-radius: 10px;
  border: 1px solid var(--worm-item-border);
  color: var(--worm-item-text);
  line-height: 1.45;
}

.item-icone {
  width: 1.35rem;
  height: 1.35rem;
  flex-shrink: 0;
  color: var(--worm-item-icone);
  margin-top: 0.15rem;
}

.cta-texto {
  margin: 0 0 0.5rem;
  color: var(--worm-sub);
  font-size: 0.95rem;
}

.nav-curiosidades {
  padding: 0.25rem 0 0;
}

.link-curiosidades {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.65rem 1.25rem;
  background: #4a7c59;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(74, 124, 89, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.link-curiosidades:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74, 124, 89, 0.4);
}

.link-curiosidades:focus-visible {
  outline: 2px solid var(--worm-focus);
  outline-offset: 3px;
}
</style>
