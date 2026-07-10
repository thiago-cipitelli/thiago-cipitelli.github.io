# thiago-cipitelli.github.io

Portfólio pessoal — [thiago-cipitelli.github.io](https://thiago-cipitelli.github.io)

Feito com [Astro](https://astro.build), CSS puro e nenhum framework de UI. Dark mode por padrão, bilíngue (pt-BR em `/`, inglês em `/en/`), deploy automático no GitHub Pages a cada push na `main`.

## Comandos

| Comando           | O que faz                                    |
| ----------------- | -------------------------------------------- |
| `npm install`     | Instala as dependências                      |
| `npm run dev`     | Sobe o site local em `http://localhost:4321` |
| `npm run build`   | Gera o site estático em `dist/`              |
| `npm run preview` | Serve o conteúdo de `dist/` localmente       |

## Estrutura

- `src/data/` — conteúdo editável (experiências, projetos, skills) com campos bilíngues `{ pt, en }`
- `src/i18n/` — dicionário de strings da interface e helpers de locale
- `src/components/` — componentes Astro (zero JS de runtime além do toggle de tema e scroll reveal)
- `src/styles/global.css` — design tokens (tema dark default + overrides light)
