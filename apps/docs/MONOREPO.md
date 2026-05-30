# 📂 Documentação do Monorepo: LinkBio-Squad

Bem-vindo ao nosso projeto! Este repositório utiliza uma estrutura de **Monorepo** para manter nossas aplicações Frontend (React) e Backend (Python) unificadas, garantindo qualidade, padronização e um fluxo de trabalho eficiente.

## 🏗️ Estrutura de Pastas

```text
/
├── .husky/              # Git hooks (automação pré-commit)
├── apps/
│   ├── frontend/        # Aplicação React (Next.js/Vite)
│   └── backend/         # API Python (FastAPI/Flask)
├── docs/                # Documentação técnica e de API
└── .lintstagedrc.json   # Regras de linting por extensão de arquivo

```

## 🛠️ Tecnologias e Ferramentas

Para manter a consistência do código, utilizamos ferramentas padronizadas na raiz:

- **Gerenciador de Pacotes:** `pnpm` (recomendado pela performance em monorepos).
- **Qualidade de Código:** `ESLint` + `Prettier` (para o frontend) e `ruff` (para o backend).
- **Git Hooks:** `Husky` para garantir que ninguém suba código sem passar pelo linting.
- **Padronização de Commits:** `Commitlint` (seguindo _Conventional Commits_).

## 🚀 Como começar

### 1. Configuração Inicial

Certifique-se de ter o **Node.js** (versão LTS) instalado. Na raiz do projeto, instale todas as dependências:

```bash
pnpm install

```

### 2. Padrão de Commits

Este projeto utiliza **Conventional Commits**. O formato obrigatório é:
`tipo(escopo): descrição`

**Exemplos:**

- `feat(frontend): cria painel de gerenciamento de links`
- `fix(backend): corrige erro na rota de autenticação`
- `docs(projeto): atualiza guia de instalação`

> **Escopos permitidos:** `frontend`, `backend`, `docs`.

O `husky` validará automaticamente sua mensagem antes do commit. Se o formato estiver incorreto, o commit será bloqueado.

### 3. Linting e Formatação

O `lint-staged` roda automaticamente antes de cada commit.

- Arquivos `.js, .jsx, .ts, .tsx`: Passam pelo `eslint` e `prettier`.
- Arquivos `.py`: Passam pelo `ruff`.

Se o linting falhar, corrija os erros apontados pelo terminal e tente commitar novamente.

## 💡 Comandos Úteis

| Ação                      | Comando                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **Instalar o fnm**        | Instale a versão para o seu SO na documentação oficial: https://github.com/Schniz/fnm |
| **Instalar Node.js**      | `fnm install` (usa a versão definida no `.node-version`)                              |
| **Ativar Node.js**        | `fnm use`                                                                             |
| **Ativar Corepack**       | `corepack enable`                                                                     |
| **Instalar dependências** | `pnpm install`                                                                        |

## Colaboração

- **Todos** Não é obrigatório ficar apenas em um scopo se puder ajudar em backend sendo frontend fique a vontade :)
- **Time Backend:** Mantenham seus arquivos dentro de `apps/backend` e usem `ruff`.
- **Time Frontend:** Mantenham seus arquivos dentro de `apps/frontend` e usem `eslint/prettier`.
- **Dúvidas?** Consulte o `README.md` específico de cada pasta ou verifique a documentação da API em `/docs`.
