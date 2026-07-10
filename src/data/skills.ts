export interface SkillGroup {
  label: { pt: string; en: string };
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: { pt: 'linguagens', en: 'languages' },
    items: ['Ruby', 'Kotlin', 'Java', 'Python', 'Go', 'JavaScript', 'C', 'C++'],
  },
  {
    label: { pt: 'frameworks', en: 'frameworks' },
    items: [
      'Ruby on Rails',
      'Spring Boot',
      'React',
      'Gin',
      'Node.js',
      'Angular',
      'Django',
      'FastAPI',
    ],
  },
  {
    label: { pt: 'bancos_de_dados', en: 'databases' },
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase'],
  },
  {
    label: { pt: 'devops_e_cloud', en: 'devops_and_cloud' },
    items: ['Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    label: { pt: 'arquitetura_e_praticas', en: 'architecture_and_practices' },
    items: [
      'Microsserviços',
      'APIs REST',
      'Clean Architecture',
      'TDD',
      'Scrum',
      'Code Review',
    ],
  },
];
