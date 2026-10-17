"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./SiteFrame.module.css";

const navItems = [
  ["O estúdio", "/estudio/"],
  ["Serviços", "/servicos/"],
  ["Trabalhos", "/trabalhos/"],
  ["Contato", "/contato/"],
] as const;

export function WhatsAppLink({ children, service, className, label }: { children: React.ReactNode; service?: string; className?: string; label?: string }) {
  const message = service ? `Olá! Gostaria de conversar sobre ${service}.` : "Olá! Gostaria de conhecer o Avesso da Luz.";
  return <a className={className} href={`https://wa.me/5583998739712?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="Avesso da Luz, início">
        <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /></span>
        <span className={styles.brandText}>Avesso <em>da Luz</em><small>ESTÚDIO DE BELEZA</small></span>
      </Link>
      <button className={styles.menuToggle} type="button" aria-expanded={menuOpen} aria-controls="navegacao-principal" onClick={() => setMenuOpen(!menuOpen)}>
        <span>{menuOpen ? "Fechar" : "Menu"}</span><b aria-hidden="true"><i /><i /></b>
      </button>
      <nav id="navegacao-principal" className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Navegação principal">
        {navItems.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}<span aria-hidden="true">↗</span></Link>)}
        <WhatsAppLink className={styles.navCta} label="Conversar pelo WhatsApp">Conversar <span aria-hidden="true">↗</span></WhatsAppLink>
      </nav>
    </header>
    <main id="conteudo">{children}</main>
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div><div className={styles.footerWordmark}>Avesso<br /><i>da Luz.</i></div><p>Um espaço para se reconhecer.</p></div>
        <div className={styles.footerLinks}><span>EXPLORE</span><Link href="/estudio/">O estúdio</Link><Link href="/servicos/">Serviços</Link><Link href="/trabalhos/">Trabalhos</Link><Link href="/contato/">Contato</Link></div>
        <div className={styles.footerContact}><span>VAMOS CONVERSAR?</span><WhatsAppLink>Iniciar conversa <b aria-hidden="true">↗</b></WhatsAppLink><small>Atendimento pelo WhatsApp</small></div>
      </div>
      <div className={styles.footerBottom}><span>© 2026 Avesso da Luz · Projeto conceitual de portfólio</span><span>Desenvolvido por LMX Soluções Digitais/Segundo Almeida</span></div>
    </footer>
  </>;
}
