export interface Job {
  company: string;
  period: { pt: string; en: string };
  role: { pt: string; en: string };
  bullets: { pt: string; en: string }[];
  tech: string[];
}

export const experience: Job[] = [
  {
    company: 'Mainô',
    period: { pt: 'jun 2023 — out 2025', en: 'Jun 2023 — Oct 2025' },
    role: { pt: 'Desenvolvedor Backend', en: 'Backend Developer' },
    bullets: [
      {
        pt: 'Desenvolvi e mantive microserviços em Ruby on Rails, melhorando a modularidade do sistema e reduzindo em 20% o tempo de resposta de endpoints críticos.',
        en: 'Built and maintained Ruby on Rails microservices, improving system modularity and cutting response time of critical endpoints by 20%.',
      },
      {
        pt: 'Implementei testes automatizados (TDD) com RSpec, aumentando em 15% a cobertura de código e reduzindo em 30% a incidência de bugs em produção.',
        en: 'Introduced automated tests (TDD) with RSpec, raising code coverage by 15% and reducing production bugs by 30%.',
      },
      {
        pt: 'Otimizei o processamento assíncrono de tarefas com RabbitMQ, melhorando em 25% a performance de integrações distribuídas.',
        en: 'Optimized asynchronous task processing with RabbitMQ, improving distributed integration performance by 25%.',
      },
      {
        pt: 'Implementei integrações de pagamento, incluindo geração de boletos bancários e comunicação com gateways financeiros.',
        en: 'Implemented payment integrations, including Brazilian bank slip (boleto) generation and communication with financial gateways.',
      },
      {
        pt: 'Refatorei e otimizei queries em PostgreSQL, reduzindo em 40% o tempo de carregamento de relatórios de BI.',
        en: 'Refactored and optimized PostgreSQL queries, cutting BI report load times by 40%.',
      },
      {
        pt: 'Apliquei estratégias de caching com Redis em endpoints de alta demanda, diminuindo a latência.',
        en: 'Applied Redis caching strategies to high-traffic endpoints, lowering latency.',
      },
    ],
    tech: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'RabbitMQ', 'RSpec'],
  },
  {
    company: 'Laboratório de Visão Computacional',
    period: { pt: 'out 2022 — jun 2023', en: 'Oct 2022 — Jun 2023' },
    role: { pt: 'Desenvolvedor Fullstack', en: 'Fullstack Developer' },
    bullets: [
      {
        pt: 'Desenvolvi uma interface 3D interativa para visualização de dados complexos com ReactJS e WebGL, melhorando em 40% a capacidade de análise de pesquisadores da Petrobras.',
        en: 'Built an interactive 3D interface for complex data visualization with ReactJS and WebGL, improving analysis capabilities for Petrobras researchers by 40%.',
      },
      {
        pt: 'Integrei a interface com APIs RESTful de processamento de imagem, garantindo comunicação em tempo real e exibição precisa de dados de pesquisa.',
        en: 'Integrated the interface with image-processing RESTful APIs, ensuring real-time communication and accurate display of research data.',
      },
    ],
    tech: ['ReactJS', 'WebGL', 'REST APIs'],
  },
  {
    company: 'Freelancer',
    period: { pt: 'dez 2022 — mar 2023', en: 'Dec 2022 — Mar 2023' },
    role: { pt: 'Desenvolvedor Android Fullstack', en: 'Android Fullstack Developer' },
    bullets: [
      {
        pt: 'Desenvolvi um aplicativo educacional em Kotlin para Android, aumentando em 25% o engajamento de mais de 100 alunos do ensino infantil.',
        en: 'Developed an educational Android app in Kotlin, increasing engagement of 100+ early-education students by 25%.',
      },
      {
        pt: 'Gerenciei build e dependências com Gradle, automatizando a entrega e reduzindo em 50% o tempo de deployment.',
        en: 'Managed builds and dependencies with Gradle, automating delivery and cutting deployment time by 50%.',
      },
    ],
    tech: ['Kotlin', 'Android', 'Gradle'],
  },
  {
    company: 'Laboratório de Metrologia — UFF',
    period: { pt: 'jan 2022 — out 2022', en: 'Jan 2022 — Oct 2022' },
    role: { pt: 'Desenvolvedor Fullstack', en: 'Fullstack Developer' },
    bullets: [
      {
        pt: 'Conduzi a migração de um DataLake do Hadoop HDFS para a Azure, usando Java 8 e o ecossistema Spring para refatorar os serviços de dados, com redução de 30% nos custos operacionais.',
        en: 'Led the migration of a DataLake from Hadoop HDFS to Azure, using Java 8 and the Spring ecosystem to refactor data services, achieving a 30% reduction in operating costs.',
      },
      {
        pt: 'Desenvolvi e mantive uma interface web em AngularJS para visualização e consulta de dados, atendendo mais de 100 usuários internos.',
        en: 'Built and maintained an AngularJS web interface for data visualization and querying, serving 100+ internal users.',
      },
      {
        pt: 'Participei de rituais ágeis e realizei code reviews para garantir qualidade e boas práticas.',
        en: 'Took part in agile ceremonies and performed code reviews to uphold quality and best practices.',
      },
    ],
    tech: ['Java 8', 'Spring', 'Azure', 'Hadoop HDFS', 'AngularJS'],
  },
];

export const education = [
  {
    period: '2020 — 2027',
    title: {
      pt: 'Bacharelado em Ciência da Computação — Universidade Federal Fluminense (UFF)',
      en: 'BSc in Computer Science — Universidade Federal Fluminense (UFF)',
    },
    note: { pt: 'cursando', en: 'ongoing' },
  },
  {
    period: '2016 — 2020',
    title: {
      pt: 'Técnico em Informática — CEFET/RJ',
      en: 'Technical Degree in Informatics — CEFET/RJ',
    },
    note: { pt: '', en: '' },
  },
];
