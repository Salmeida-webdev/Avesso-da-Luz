import Image from "next/image";
import SiteFrame, { WhatsAppLink } from "@/components/SiteFrame";
import Reveal from "@/components/Reveal";
import s from "../shared.module.css";
import styles from "./work.module.css";

export const metadata = { title: "Trabalhos", description: "Um olhar visual sobre cabelo, maquiagem e penteados no universo conceitual do Avesso da Luz." };

const works = [
  { src:"/images/gesto-e-movimento.webp", alt:"Profissional ajeita uma onda do cabelo de uma cliente", category:"CABELO", title:"Gesto e movimento", className:"hair" },
  { src:"/images/pele-em-luz.webp", alt:"Maquiagem natural em luz quente filtrada por tecido", category:"MAQUIAGEM", title:"Pele em luz", className:"makeup" },
  { src:"/images/penteado-de-festa.webp", alt:"Penteado elegante com coque solto e iluminação lateral", category:"PRODUÇÃO", title:"Um instante para guardar", className:"event" },
  { src:"/images/luz-em-mim.webp", alt:"Retrato de uma mulher com cabelos naturais e olhos fechados", category:"EXPRESSÃO", title:"Luz em mim", className:"portrait" },
];

export default function WorkPage() {
  return <SiteFrame>
    <section className={`${s.wrap} ${s.pageIntro}`}><div className={s.eyebrow}>TRABALHOS</div><h1>O que a luz<br /><em>toca, revela.</em></h1><p>Um caderno visual de texturas, gestos e possibilidades. Imagens conceituais que traduzem o olhar do estúdio.</p></section>
    <section className={`${s.wrap} ${styles.workGrid}`} aria-label="Galeria de trabalhos conceituais">
      {works.map((work,i)=><Reveal key={work.src} delay={i*.06}><figure className={`${styles.workCard} ${styles[work.className]}`}><div className={`${s.photoFrame} ${styles.image}`}><Image src={work.src} alt={work.alt} fill sizes="(max-width: 760px) 90vw, 45vw" className={s.photo} /></div><figcaption><span>{work.category}</span><i>{work.title}</i><b aria-hidden="true">0{i+1}</b></figcaption></figure></Reveal>)}
    </section>
    <p className={`${s.wrap} ${styles.disclaimer}`}>As imagens desta galeria foram criadas para este projeto conceitual. Não representam clientes ou resultados de atendimentos reais.</p>
    <section className={styles.workCta}><div className={s.wrap}><div className={s.eyebrow}>A SUA IDEIA TAMBÉM PODE GANHAR FORMA</div><h2>Vamos imaginar<br /><em>juntos?</em></h2><WhatsAppLink className={s.textLink}>Conversar sobre uma produção <span aria-hidden="true">↗</span></WhatsAppLink></div></section>
  </SiteFrame>;
}
