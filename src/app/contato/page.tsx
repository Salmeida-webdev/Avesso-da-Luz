import SiteFrame, { WhatsAppLink } from "@/components/SiteFrame";
import s from "../shared.module.css";
import styles from "./contact.module.css";

export const metadata = { title: "Contato", description: "Converse com o Avesso da Luz pelo WhatsApp e conte o que você está imaginando." };

export default function ContactPage() {
  return <SiteFrame>
    <section className={`${s.wrap} ${styles.contact}`}>
      <div className={styles.contactMain}><div className={s.eyebrow}>CONTATO</div><h1>Uma conversa<br />pode ser o <em>começo.</em></h1><p>Conte o que você está buscando, tire uma dúvida ou fale sobre uma ocasião especial. A gente segue a conversa por aqui.</p><WhatsAppLink className={styles.whatsapp}><span>ABRIR CONVERSA NO WHATSAPP</span><b aria-hidden="true">↗</b></WhatsAppLink><small>O link abre uma conversa com uma mensagem inicial. O agendamento é combinado diretamente pelo WhatsApp.</small></div>
      <div className={styles.contactAside}><div className={styles.sunMark} aria-hidden="true"><i /><i /><i /></div><span className={s.kicker}>AVESSO DA LUZ</span><p>Um espaço<br />para se reconhecer.</p><div className={styles.contactMeta}><span>UM PROJETO CONCEITUAL</span><span>Endereço, horários e redes sociais não foram definidos para esta demonstração.</span></div></div>
    </section>
    <section className={styles.contactBottom}><div className={s.wrap}><span>BELEZA, NO SEU TEMPO.</span><span>ESTÚDIO DE BELEZA · CONCEITO AUTORAL</span></div></section>
  </SiteFrame>;
}
