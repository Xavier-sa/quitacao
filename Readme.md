# ⟁ Quitação Estratégica — Protótipo Offline (PWA)

![Quitação Estratégica — Protótipo Offline](./img/quitando.jpg)

> Protótipo em desenvolvimento voltado à **organização e quitação de dívidas pessoais**, com funcionamento **100% offline**, foco em **educação financeira** e **autonomia do usuário**.

---

## ⧉ Contexto

Sou formado em **Gestão Pública** e, ao longo da minha trajetória, observei um problema recorrente:

> A dificuldade de organizar dívidas, acompanhar acordos e manter disciplina financeira de forma simples, acessível e contínua.

Grande parte das soluções existentes:
- dependem de internet constante
- exigem cadastro excessivo
- não funcionam bem em dispositivos móveis simples
- não respeitam a realidade de quem precisa apenas **controle e clareza**

Este projeto nasce como um **protótipo de estudo**, unindo **tecnologia** e **visão social**, com foco em problemas reais do cotidiano.

---

## ⧖ Objetivos

- Criar uma aplicação **simples, funcional e offline**
- Estimular **disciplina financeira** por meio de feedback visual
- Estudar arquitetura **offline-first (PWA)**
- Desenvolver visão de **produto**, não apenas código

> Não é um produto final, mas um **laboratório de aprendizado consciente**.

---

## ⧠ Funcionalidades

- Funciona **100% offline** (PWA)
- Instalável como aplicativo no celular
- Persistência local (sem backend)
- Controle de acesso por **PIN local**
- Acompanhamento visual da quitação
- Interface **mobile-first**, pensada para uso diário

---

## ⧬ Tecnologias Utilizadas

- HTML5
- CSS3 (mobile-first)
- JavaScript (Vanilla)
- Progressive Web App (Service Worker + Manifest)
- localStorage (persistência offline)

> Nenhuma biblioteca externa foi utilizada intencionalmente, priorizando domínio da base.

---

## ⧗ Arquitetura

```

/quitacao
├── index.html        # Interface principal
├── style.css         # Estilos e identidade visual
├── app.js            # Lógica e persistência
├── manifest.json     # Configuração PWA
├── service-worker.js # Cache offline
└── img/

```

---

## ⧁ Por que PWA?

A escolha por **Progressive Web App** é técnica e social:

- Funciona em celulares simples
- Não exige Play Store ou App Store
- Não consome dados após instalado
- Reduz barreiras de acesso

Essa abordagem aproxima a tecnologia da **realidade da população**, especialmente em contextos de restrição de recursos.

---

## ⚠️ Limitações Conhecidas

- Persistência via `localStorage` (adequada para uso pessoal e protótipo)
- Dados locais podem ser apagados pelo sistema
- O PIN local oferece **proteção básica**, não criptografia forte

> Em um produto real, seriam avaliados IndexedDB, criptografia e backend.

---

## ⧎ Próximas Evoluções (em estudo)

- Exportação / importação de dados (JSON)
- Histórico mensal de quitação
- Metas automáticas de reserva
- Visualização de progresso por período
- Camada adicional de segurança local

---

## ⧘ Considerações Finais

Este projeto reflete meu compromisso em:

- Aprender tecnologia **com propósito**
- Resolver problemas reais com soluções simples
- Evoluir como desenvolvedor entendendo o **problema antes da solução**

Críticas e sugestões são bem-vindas.

---

**Autor:** Wellington Aparecido Santos Xavier  
**Formação:** Gestão Pública  
**Foco atual:** Desenvolvimento de soluções práticas, aprendizado contínuo e base sólida em tecnologia
# quitacao
