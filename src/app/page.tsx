import Image from "next/image";
import Link from "next/link";
import SiteFrame, { WhatsAppLink } from "@/components/SiteFrame";
import Reveal from "@/components/Reveal";
import s from "./shared.module.css";
import styles from "./home.module.css";

const services = [
  { n: "01", title: "Cabelo", detail: "Corte · cor · cuidado · finalização" },
  { n: "02", title: "Maquiagem", detail: "Presença leve, pele real, expressão sua" },
  { n: "03", title: "Penteados", detail: "Produções para encontros que ficam" },
  { n: "04", title: "Sobrancelhas", detail: "Desenho pensado para o seu olhar" },
];

export default function Home() {
  return <SiteFrame>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <div className={s.eyebrow}>BELEZA É UMA FORMA DE VOLTAR</div>
        <h1>Um espaço<br />para se <em>reconhecer.</em></h1>
        <p>Beleza como gesto, presença e expressão pessoal. Um cuidado que começa do lado de dentro.</p>
        <div className={styles.heroActions}><WhatsAppLink className={styles.primaryButton}>Vamos conversar <span aria-hidden="true">↗</span></WhatsAppLink><Link className={s.textLink} href="/estudio/">Conheça o estúdio <span aria-hidden="true">↗</span></Link></div>
        <div className={styles.heroIndex}><span>01 / 04</span><i /></div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.heroImage}><Image src="/images/luz-em-mim.webp" alt="Retrato editorial de uma mulher de olhos fechados, iluminada por luz suave" fill priority sizes="(max-width: 760px) 100vw, 48vw" className={s.photo} /></div>
        <div className={styles.imageTag}><span>um gesto<br />de cada vez</span><i aria-hidden="true">✳</i></div>
        <div className={styles.verticalNote}>CUIDADO · EXPRESSÃO · PRESENÇA</div>
      </div>
      <div className={styles.heroSeal} aria-hidden="true">A<br /><span>·</span><br />L</div>
    </section>

    <section className={styles.manifesto}>
      <Reveal><div className={s.eyebrow}>O AVESSO DA LUZ</div><h2>A beleza não pede<br />uma versão nova.<br /><em>Ela revela a sua.</em></h2></Reveal>
      <Reveal delay={.1}><div className={styles.manifestoAside}><span className={s.ornament} aria-hidden="true">Al</span><p>Um estúdio para cuidar sem apagar. Para experimentar, respirar e se ver com outros olhos — mantendo tudo aquilo que já é seu.</p><Link className={s.textLink} href="/estudio/">Leia nosso manifesto <span aria-hidden="true">↗</span></Link></div></Reveal>
    </section>

    <section className={styles.services}>
      <div className={`${s.wrap} ${styles.servicesInner}`}>
        <Reveal><div className={s.sectionHead}><div><div className={s.eyebrow}>RITUAIS, NÃO FÓRMULAS</div><h2 className={s.sectionTitle}>Cuidado que encontra<br /><em>o seu jeito.</em></h2></div><Link className={s.textLink} href="/servicos/">Ver todos os serviços <span aria-hidden="true">↗</span></Link></div></Reveal>
        <div className={styles.serviceList}>{services.map(item => <Reveal key={item.n}><Link href={`/servicos/#${item.title.toLowerCase().replace(" ", "-")}`} className={styles.serviceRow}><span className={styles.serviceNum}>{item.n}</span><span className={styles.serviceName}>{item.title}</span><span className={styles.serviceDetail}>{item.detail}</span><span className={styles.serviceArrow} aria-hidden="true">↗</span></Link></Reveal>)}</div>
      </div>
    </section>

    <section className={styles.work}>
      <div className={`${s.wrap} ${styles.workInner}`}>
        <Reveal><div className={s.eyebrow}>UM RECORTE DO NOSSO OLHAR</div><h2 className={s.sectionTitle}>A luz mora<br /><em>nos detalhes.</em></h2></Reveal>
        <div className={styles.galleryTease}>
          <Reveal><figure className={`${styles.galleryCard} ${styles.galleryCardTall}`}><div className={s.photoFrame}><Image src="/images/gesto-e-movimento.webp" alt="Mãos de profissional ajeitando o cabelo ondulado de uma cliente" fill sizes="(max-width: 760px) 90vw, 31vw" className={s.photo} /></div><figcaption><span>01 — CABELO</span><i>Gesto e movimento</i></figcaption></figure></Reveal>
          <Reveal delay={.12}><figure className={styles.galleryCard}><div className={`${s.photoFrame} ${styles.galleryCardShort}`}><Image src="/images/pele-em-luz.webp" alt="Detalhe de maquiagem delicada e luz atravessando um tecido translúcido" fill sizes="(max-width: 760px) 90vw, 31vw" className={s.photo} /></div><figcaption><span>02 — MAQUIAGEM</span><i>Pele em luz</i></figcaption></figure></Reveal>
          <Reveal delay={.22}><div className={styles.galleryEnd}><p>Uma coleção de formas, texturas e instantes — feita para celebrar o que já existe.</p><Link className={s.textLink} href="/trabalhos/">Ver trabalhos <span aria-hidden="true">↗</span></Link></div></Reveal>
        </div>
      </div>
    </section>

    <section className={styles.invite}>
      <div className={styles.inviteTexture} aria-hidden="true" />
      <Reveal><div className={s.eyebrow}>A CONVERSA PODE COMEÇAR AQUI</div><h2>Seu próximo<br /><em>encontro com você.</em></h2><p>Conte o que está imaginando. A gente conversa sobre o cuidado que faz sentido para o seu momento.</p><WhatsAppLink className={styles.inviteButton}>Chamar no WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink></Reveal>
      <span className={styles.inviteMark} aria-hidden="true">✳</span>
    </section>
  </SiteFrame>;
}
