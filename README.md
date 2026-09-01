# prg04pauloeverton

Repositório de atividades da disciplina de Programação Web (PRG04) — que agora está evoluindo para um **projeto pessoal real**: um sistema de **controle financeiro pessoal**.

## 💡 Sobre o projeto

O que começou como uma sequência de atividades soltas da disciplina (entities HTML, mídia, paleta de cores, painel admin) está sendo reaproveitado como base de um app útil no dia a dia: acompanhar gastos, definir metas financeiras e visualizar para onde o dinheiro está indo.

A tela de **login** e o **painel administrativo** (antes só exercícios de tabela/CRUD) vão virar, respectivamente, a autenticação do usuário e o painel principal de controle financeiro (lista de transações, categorias, metas etc.).

### Stack

- **Atual:** HTML5, CSS3 e JavaScript puro (front-end estático, dados ainda simulados/mockados).
- **Planejado:** back-end em **Java** (API REST) para persistência real de dados, autenticação e regras de negócio. Essa etapa ainda será integrada nas próximas fases.

## 📁 Estrutura do projeto

```
├── index.html            # Página inicial / landing do projeto
├── login.html            # Tela de autenticação do usuário
├── admin.html            # Painel principal (evoluindo para o dashboard financeiro)
├── atividade-3.html      # Atividade da disciplina — entities, listas, imagem responsiva
├── atividade-4.html      # Atividade da disciplina — áudio, vídeo embed e CSS
├── atividade-5.html      # Atividade da disciplina — definição da paleta de cores
├── assets/
│   ├── css/               # Estilos globais e específicos de cada página/atividade
│   ├── js/                # Scripts (ex: login.js, admin.js) e, futuramente, lógica do app
│   ├── icons/              # Favicon e ícones do projeto
│   ├── images/              # Imagens usadas nas páginas (ex: imagens responsivas)
│   └── songs/              # Mídia usada nas atividades (ex: atividade 4)
├── components/            # Componentes reutilizáveis de interface (em construção)
└── README.md
```

> As páginas `atividade-3.html`, `atividade-4.html` e `atividade-5.html` são exercícios da disciplina mantidos como histórico/portfólio de aprendizado e continuam acessíveis pela página inicial (`index.html`).

## 🗺️ Roadmap

- [ ] Definir o modelo de dados do controle financeiro (transações, categorias, metas)
- [ ] Transformar `admin.html` no dashboard financeiro (listagem, filtros, gráficos)
- [ ] Implementar cadastro/edição/exclusão de transações (front-end com dados mockados)
- [ ] Criar API em Java para persistência real dos dados
- [ ] Integrar front-end existente com a API
- [ ] Autenticação real via back-end (substituindo o login mockado atual)

## 👤 Autor

Paulo Everton
