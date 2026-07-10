export interface Project {
  name: string;
  repo: string;
  language: string;
  languageColor: string;
  description: { pt: string; en: string };
  tags: string[];
}

// GitHub language colors
const GO = '#00add8';
const KOTLIN = '#a97bff';
const RUBY = '#701516';
const JS = '#f1e05a';
const ASTRO = '#ff5a03';

export const projects: Project[] = [
  {
    name: 'api-usinas',
    repo: 'https://github.com/thiago-cipitelli/api-usinas',
    language: 'Kotlin',
    languageColor: KOTLIN,
    description: {
      pt: 'Processamento de 400 mil+ registros do dataset RALIE (ANEEL) com Kotlin, Spring Boot e coroutines: paralelismo em chunks, JDBC batching e ranking com window functions em SQL nativo.',
      en: 'Processes 400k+ records from ANEEL’s RALIE dataset with Kotlin, Spring Boot and coroutines: chunked parallelism, JDBC batching and native-SQL window-function rankings.',
    },
    tags: ['Kotlin', 'Spring Boot', 'Coroutines', 'PostgreSQL', 'Angular'],
  },
  {
    name: 'nuplot',
    repo: 'https://github.com/thiago-cipitelli/nuplot',
    language: 'Go',
    languageColor: GO,
    description: {
      pt: 'API REST em Go com Gin: autenticação JWT, hashing com bcrypt, PostgreSQL com queries geradas por sqlc e exportação de dados em CSV.',
      en: 'REST API in Go with Gin: JWT authentication, bcrypt hashing, PostgreSQL with sqlc-generated queries and CSV data export.',
    },
    tags: ['Go', 'Gin', 'JWT', 'sqlc', 'PostgreSQL'],
  },
  {
    name: 'dlrpg',
    repo: 'https://github.com/thiago-cipitelli/dlrpg',
    language: 'Go',
    languageColor: GO,
    description: {
      pt: 'Experimento em Go que consome a API GraphQL do GitHub para acompanhar contribuições diárias e transformá-las em progressão estilo RPG, com persistência via sqlc.',
      en: 'Go experiment that consumes the GitHub GraphQL API to track daily contributions and turn them into RPG-style progression, persisted via sqlc.',
    },
    tags: ['Go', 'GraphQL', 'sqlc'],
  },
  {
    name: 'prata-representacoes',
    repo: 'https://github.com/thiago-cipitelli/prata-representacoes',
    language: 'Astro',
    languageColor: ASTRO,
    description: {
      pt: 'Site institucional estático para uma empresa de representação comercial, feito com Astro e pensado para ser editado por leigos: todo o conteúdo vive em arquivos de dados.',
      en: 'Static business website built with Astro, designed so non-developers can edit it: all content lives in plain data files.',
    },
    tags: ['Astro', 'Static site'],
  },
  {
    name: 'weight-training',
    repo: 'https://github.com/thiago-cipitelli/weight-training',
    language: 'Ruby',
    languageColor: RUBY,
    description: {
      pt: 'Aplicação Ruby on Rails para explorar e consultar um dataset de exercícios de musculação.',
      en: 'Ruby on Rails application for browsing and querying a weight-training exercise dataset.',
    },
    tags: ['Ruby on Rails'],
  },
  {
    name: 'Homepage',
    repo: 'https://github.com/thiago-cipitelli/Homepage',
    language: 'JavaScript',
    languageColor: JS,
    description: {
      pt: 'Página inicial pessoal em HTML, CSS e JavaScript puro, com efeito de partículas interativas em canvas.',
      en: 'Personal homepage in plain HTML, CSS and JavaScript, with an interactive canvas particle effect.',
    },
    tags: ['JavaScript', 'Canvas', 'CSS'],
  },
];
