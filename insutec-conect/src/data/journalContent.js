// src/data/journalContent.js

const journalContent = {
  header: {
    logoSrc: '/src/assets/imagem/insutec-removebg-preview.png',
    title: 'INSUTEC-CONECT',
    navLinks: [
      { name: 'Home', path: '/' },
      { name: 'News', path: '/news' },
      { name: 'Podcast', path: '/podcast' },
      { name: 'Arts', path: '/arts' },
      { name: 'Opinion', path: '/opinion' },
      { name: 'About Us', path: '/about' },
    ]
  },
  sections: [
    {
      type: 'news',
      title: 'Últimas Notícias',
      description: 'Bem-vindo à página de notícias do INSUTEC-CONECT. Aqui, encontrará as últimas atualizações sobre a vida académica, eventos do campus e análises aprofundadas sobre questões relevantes para a nossa comunidade. Mantemo-lo informado sobre tudo o que acontece na nossa instituição.',
      graphData: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
          label: 'Inscrições em Eventos',
          data: [150, 180, 220, 200, 250, 300],
          backgroundColor: '#f7d046',
        }]
      },
      content: [
        {
          id: 1,
          title: 'Direção do INSUTEC anuncia aumento de 20% na propina',
          description: 'A notícia foi recebida com surpresa e levanta preocupações sobre a acessibilidade do ensino em Luanda.',
          fullText: 'A direção do Instituto Superior Politécnico de Tecnologias e Ciências (INSUTEC) surpreendeu a comunidade académica esta semana ao anunciar um aumento de 20% no valor da propina. A medida, que entrará em vigor no próximo semestre, gerou imediato descontentamento entre os estudantes e pais, que questionam a decisão numa altura de dificuldades económicas. O reitor, em conferência de imprensa, justificou o aumento com a necessidade de investir na modernização das infraestruturas e na melhoria da qualidade do ensino, prometendo mais bolsas de estudo para alunos com dificuldades financeiras. No entanto, o anúncio já provocou uma série de debates e discussões nas redes sociais, e os estudantes já começam a organizar-se para uma possível manifestação.',
          author: 'Equipe Editorial',
          time: '09:00 AM WAT, Agosto 09, 2025',
          likes: 5,
          dislikes: 18,
          imageUrl: 'https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1770&auto=format&fit=crop'
        },
        {
          id: 2,
          title: 'Manifestação Estudantil em Luanda Contra Aumento da Propina',
          description: 'Artigo sobre o crescente descontentamento e a organização de uma possível manifestação dos estudantes do INSUTEC e de outras instituições de ensino superior em Luanda devido ao aumento da propina.',
          fullText: 'O crescente descontentamento entre os estudantes do INSUTEC e outras instituições de ensino superior em Luanda culminou na organização de uma manifestação. O movimento, que ganhou força nas redes sociais, é uma resposta direta ao recente aumento da propina anunciado pela direção do INSUTEC. Os líderes estudantis afirmam que o aumento é insustentável e que a qualidade do ensino não justifica tal medida. A manifestação está agendada para a próxima sexta-feira, em frente ao campus principal, e conta com o apoio de várias associações estudantis. A polícia de Luanda já foi informada do evento e garante que a segurança de todos será a prioridade.',
          author: 'Joana Martins',
          time: '11:30 AM WAT, Agosto 09, 2025',
          likes: 25,
          dislikes: 2,
          imageUrl: 'https://images.unsplash.com/photo-1550993074-a690e092147f?q=80&w=1974&auto=format&fit=crop'
        },
        {
          id: 3,
          title: 'INSUTEC lança novo programa de mentoria',
          description: 'Leia sobre a iniciativa que conecta alunos do primeiro ano com veteranos para apoio acadêmico e pessoal.',
          fullText: 'Em uma iniciativa para melhorar a integração dos novos estudantes, o INSUTEC lançou um novo programa de mentoria. A iniciativa, que foi bem recebida pela comunidade, conecta alunos do primeiro ano com estudantes mais experientes para apoio académico e pessoal. O programa tem como objetivo facilitar a transição para a vida universitária, oferecendo orientação sobre matérias, organização de estudo e oportunidades de estágio. Segundo a coordenadora do programa, a Dra. Ana Silva, esta é uma forma de fortalecer o sentido de comunidade e de garantir que nenhum aluno se sinta isolado. As inscrições para o programa já estão abertas e podem ser feitas através do portal do estudante.',
          author: 'Equipe Editorial',
          time: '10:00 AM WAT, Agosto 08, 2025',
          likes: 12,
          dislikes: 0,
          imageUrl: 'https://images.unsplash.com/photo-1517430855219-c603b5d2524a?q=80&w=1770&auto=format&fit=crop'
        }
      ]
    },
    {
      type: 'podcast',
      title: 'Destaques do Podcast',
      content: [
        {
          id: 1,
          title: 'Episódio #12: O Futuro da IA na Educação',
          description: 'Uma discussão aprofundada com os professores dos cursos de informática sobre o impacto da IA no ensino universitário.',
          host: 'Mário da Costa',
          time: '02:00 PM WAT, Agosto 07, 2025'
        }
      ]
    },
    {
      type: 'arts',
    title: 'Arte e Cultura',
    content: [
      {
        id: 1,
        title: 'Exposição fotográfica "Cores de Luanda"',
        description: 'A galeria do campus apresenta o trabalho de jovens fotógrafos do Instituto. A entrada é gratuita.',
        author: 'Maria dos Santos',
        time: '04:00 PM WAT, Agosto 06, 2025'
      }
    ]
    }
  ],
  highlights: {
    title: 'Destaque da Semana',
    text: 'Reitor do INSUTEC anuncia nova parceria com universidade internacional para intercâmbio de estudantes.',
  }
};

export default journalContent;