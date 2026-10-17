import Link from "next/link";
import SiteFrame, { WhatsAppLink } from "@/components/SiteFrame";
import Reveal from "@/components/Reveal";
import s from "../shared.module.css";
import styles from "./services.module.css";

export const metadata = { title: "Serviços", description: "Conheça os cuidados de cabelo, maquiagem, penteados e design de sobrancelhas do Avesso da Luz." };

const groups = [
  { id: "cabelo", n: "01", title: "Cabelo", phrase: "Textura, forma e movimento.", desc: "Corte, coloração, tratamento e finalização pensados a partir do seu fio, da sua rotina e do resultado que você busca.", tags: ["Corte", "Coloração", "Tratamento", "Finalização"] },
  { id: "maquiagem", n: "02", title: "Maquiagem", phrase: "A pele continua sendo pele.", desc: "Uma produção que conversa com sua expressão. Do acabamento leve a um olhar mais marcado, sempre respeitando o que faz você se sentir bem.", tags: ["Maquiagem social", "Pele natural", "Olhos e acabamento"] },
  { id: "penteados", n: "03", title: "Penteados", phrase: "Para chegar inteira ao momento.", desc: "Penteados para ocasiões especiais, criados para acompanhar seu estilo e durar ao longo da celebração.", tags: ["Eventos", "Celebrações", "Produção pessoal"] },
  { id: "sobrancelhas", n: "04", title: "Sobrancelhas", phrase: "O seu olhar, em primeiro plano.", desc: "Design de sobrancelhas com atenção à harmonia natural e ao desenho que faz sentido para você.", tags: ["Design", "Manutenção", "Orientação de formato"] },
];

export default function ServicesPage() {
  return <SiteFrame>
    <section className={`${s.wrap} ${s.pageIntro}`}><div className={s.eyebrow}>SERVIÇOS</div><h1>Rituais para<br /><em>se encontrar.</em></h1><p>Um conjunto de possibilidades para cuidar de cabelo, rosto e expressão — com tempo para conversar e espaço para escolher.</p></section>
    <section className={`${s.wrap} ${styles.servicesList}`}>
      {groups.map((group,i)=><Reveal key={group.id}><article className={styles.service} id={group.id}><div className={styles.serviceAside}><span>{group.n}</span><i aria-hidden="true">✳</i></div><div className={styles.serviceMain}><div className={s.kicker}>CUIDADO {group.n}</div><h2>{group.title}</h2><h3>{group.phrase}</h3><p>{group.desc}</p><div className={styles.tags}>{group.tags.map(tag=><span key={tag}>{tag}</span>)}</div><WhatsAppLink service={group.title} className={styles.serviceCta}>Conversar sobre {group.title.toLowerCase()} <b aria-hidden="true">↗</b></WhatsAppLink></div><div className={styles.serviceIndex} aria-hidden="true">{String(i+1).padStart(2,"0")}</div></article></Reveal>)}
    </section>
    <section className={styles.serviceFooter}><div className={s.wrap}><div><span className={s.eyebrow}>CADA HISTÓRIA COMEÇA DE UM JEITO</span><h2>Não sabe por onde<br /><em>começar?</em></h2></div><p>Conta o que você tem em mente. A gente conversa e encontra uma possibilidade que combine com seu momento.</p><WhatsAppLink className={s.textLink}>Perguntar pelo WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink></div></section>
  </SiteFrame>;
}
