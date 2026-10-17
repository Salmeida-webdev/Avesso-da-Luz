import Image from "next/image";
import Link from "next/link";
import SiteFrame, { WhatsAppLink } from "@/components/SiteFrame";
import Reveal from "@/components/Reveal";
import s from "../shared.module.css";
import styles from "./studio.module.css";

export const metadata = { title: "O estúdio", description: "Conheça a abordagem sensível e autoral do estúdio Avesso da Luz." };

export default function StudioPage() {
  return <SiteFrame>
    <section className={`${s.wrap} ${s.pageIntro}`}><div className={s.eyebrow}>O ESTÚDIO</div><h1>Um olhar que<br /><em>não pede licença.</em></h1><p>A gente acredita que cuidado não é transformação obrigatória. É espaço, escuta e liberdade para experimentar.</p></section>
    <section className={`${styles.story} ${s.wrap}`}>
      <Reveal><div className={styles.storyImage}><Image src="/images/luz-em-mim.webp" alt="Retrato editorial com luz natural atravessando o rosto" fill sizes="(max-width: 760px) 90vw, 46vw" className={s.photo} /></div></Reveal>
      <Reveal delay={.12}><div className={styles.storyText}><div className={s.eyebrow}>O QUE EXISTE DO OUTRO LADO</div><h2>Avesso é aquilo<br />que <em>também ilumina.</em></h2><p>O nome nasce da ideia de olhar para além da superfície. O avesso revela costuras, gestos e escolhas — as pequenas coisas que tornam uma beleza verdadeiramente sua.</p><p>Por aqui, cada atendimento começa com conversa. A técnica acompanha a pessoa, e não o contrário. Sem fórmulas prontas, sem pressa de caber em uma imagem.</p><WhatsAppLink className={s.textLink}>Começar uma conversa <span aria-hidden="true">↗</span></WhatsAppLink></div></Reveal>
    </section>
    <section className={styles.values}>
      <div className={s.wrap}><Reveal><div className={s.eyebrow}>NOSSO JEITO DE CUIDAR</div><h2 className={s.sectionTitle}>Três gestos.<br /><em>Um mesmo cuidado.</em></h2></Reveal>
        <div className={styles.valueGrid}>
          {[{n:"I",title:"Escutar",text:"Entender o que você deseja e o que faz sentido no seu cotidiano."},{n:"II",title:"Respeitar",text:"Valorizar textura, identidade e o tempo de cada pessoa."},{n:"III",title:"Revelar",text:"Usar técnica e criação para deixar aparecer o que já é seu."}].map((item,i)=><Reveal delay={i*.1} key={item.n}><article className={styles.value}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><i aria-hidden="true">✳</i></article></Reveal>)}
        </div>
      </div>
    </section>
    <section className={styles.studioNote}><div className={s.wrap}><span className={s.ornament} aria-hidden="true">Al</span><div><div className={s.eyebrow}>UM ESPAÇO EM CONSTRUÇÃO</div><p>Avesso da Luz é uma identidade conceitual de portfólio. Informações sobre profissionais e ambiente serão acrescentadas quando estiverem definidas.</p></div><Link href="/contato/" className={s.textLink}>Fale com o estúdio <span aria-hidden="true">↗</span></Link></div></section>
  </SiteFrame>;
}
