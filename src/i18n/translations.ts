// =============================================================
// translations.ts
// All visible site text lives here. Three locales: pt | en | ru.
// PLACEHOLDER markers indicate copy that should be edited per
// language independently (bio, real names, real numbers, links).
// =============================================================

export type Locale = 'pt' | 'en' | 'ru'

export const LOCALES: Locale[] = ['pt', 'en', 'ru']

interface TimelineEntry {
  year: string
  title: string
  place: string
  desc: string
  bullets?: string[]
}

interface ContactLink {
  label: string
  href: string
}

export interface Translations {
  meta: { title: string; description: string }
  nav: { about: string; projects: string; contact: string; resume: string }
  hero: {
    kicker: string
    title: string
    subtitle: string
    stack: string
    intro: string
    statusLabel: string
    statusValue: string
    locationLabel: string
    locationValue: string
    languagesLabel: string
    languagesValue: string
  }
  about: { heading: string; label: string; bio: string }
  languages: { heading: string; label: string; proficient: string; familiar: string }
  interests: {
    heading: string
    label: string
    hint: string
    empty: string
    showAll: string
    showLess: string
    items: { name: string; description: string }[]
  }
  timeline: {
    heading: string
    label: string
    workLabel: string
    eduLabel: string
    work: TimelineEntry[]
    education: TimelineEntry[]
  }
  projects: {
    heading: string
    label: string
    intro: string
    viewOnGithub: string
    privateBadge: string
    descriptions: Record<string, string>
  }
  contact: {
    heading: string
    label: string
    title: string
    email: string
    emailLabel: string
    phone: string
    phoneLabel: string
    whatsappMessage: string
    whatsappLabel: string
    linksLabel: string
    links: ContactLink[]
    closing: string
    copied: string
  }
  footer: {
    copyright: string
    builtWith: string
  }
}

// -------------------------------------------------------------
// EN — English
// -------------------------------------------------------------
const en: Translations = {
  meta: {
    title: 'Joshua Strauch — Software Engineer',
    description: 'Joshua Strauch — full-stack software engineer in Salvador, Brazil (UTC-3). PHP, Python, C#/.NET, SQL and DevOps. Open to remote roles.',
  },
  nav: { about: 'about', projects: 'projects', contact: 'contact', resume: 'resume' },
  hero: {
    kicker: '// hello, world',
    title: 'Joshua Strauch',
    subtitle: 'Full-stack Software Engineer',
    stack: 'PHP · Python · C#/.NET · SQL · DevOps',
    intro:
      'I keep production systems running, from the database to the deploy. I started in networks and infrastructure, so when something breaks I can debug below the application layer.',
    statusLabel: 'status',
    statusValue: 'open to remote roles',
    locationLabel: 'location',
    locationValue: 'Salvador, Brazil · UTC-3',
    languagesLabel: 'lang',
    languagesValue: 'pt native · en fluent · ru learning',
  },
  about: {
    heading: '// about',
    label: 'README.md',
    bio:
      "I'm a developer. I work full-stack because that's how I learned the craft — develop a thick skin, figure things out when something breaks. Software, to me, is structural architecture: it has to outlast the next refactor without collapsing. I learn languages (human and machine) because translating is the closest thing there is to thinking twice. Off the keyboard: Counter-Strike, cooking, manga, and a good beach.",
  },
  languages: {
    heading: '// skills',
    label: 'code --skills',
    proficient: 'proficient',
    familiar: 'familiar',
  },
  interests: {
    heading: '// interests',
    label: 'tags --list',
    hint: 'click any item to expand',
    empty: 'soon…',
    showAll: 'show all',
    showLess: 'show less',
    items: [
      {
        name: 'PHP',
        description:
          "First language I took seriously. It's a messy language — front, back, and database all in the same file — and there's a kind of beauty in that.",
      },
      {
        name: 'Linux',
        description:
          "Love at first sight. Been using it since technical school, where I spent a lot of time with Ubuntu and Debian — that's where I picked up my networking fundamentals and the Linux basics. Can't go back now — keyboard navigation turned into an extension of the hand.",
      },
      {
        name: 'Open Source',
        description:
          "When I browsed mods for old games, I always looked for the ones with open source — after one incident where I downloaded a mod that had a virus. That's how I found out you could crack a mod open and read the code behind everything happening backstage. Never left.",
      },
      {
        name: 'Jellyfish',
        description:
          "My favorite animal. Fascinating creatures despite being 95–99% just water. For example: they're the namesake of my favorite Ubuntu release (Jellyfish); some species glow in the dark via bioluminescence; they have no brain, no heart, and no lungs. Just chill creatures drifting around the ocean.",
      },
      {
        name: 'Coffee',
        description:
          "Comes with the territory, I figure. Didn't like it until I got used to the taste. Now I can tell regular from extra-strong — unfortunately.",
      },
      {
        name: 'Games',
        description:
          "Like a lot of things on this list, games were a huge part of my computer journey and what I learned along the way: file navigation, terms like FPS and ms, modding the base game, figuring out what my rig could handle. Counter-Strike, Minecraft, Left 4 Dead, Overwatch, Osu! — all of them played a part in growing me into a heavy computer user.",
      },
      {
        name: 'Systems Programming',
        description:
          "My first contact with programming and the command line was through Minecraft, back when I was a kid. To get the game running I had to chain a bunch of commands and tweak things until something worked, and to play with friends I had to figure out IPs and mod versioning. I learned the hard way, before I knew any of it had a name.",
      },
      {
        name: 'Cryptography',
        description:
          "Always liked the idea. Picked it up more seriously while studying databases, when it clicked that not every piece of information can or should be exposed. A lot of what I know about vulnerabilities I learned on a famous site, hackthissite.org — really good stuff.",
      },
      {
        name: 'Self-Hosting',
        description:
          "Picked it up early, using my own machine as a server to play with friends remotely. Good days of Minecraft and Terraria.",
      },
      {
        name: 'Vim',
        description:
          "Equal parts motivating and brutal — courtesy of technical school. Every navigation detail had to be understood end to end. Funny remembering friends flailing just to figure out how to quit the editor.",
      },
      {
        name: 'Mechanical Keyboards',
        description:
          'Grew up on the stock laptop keyboard, until I found out from YouTube videos that there was a whole "extension" of that world out there — that satisfying noise on every click. Had to stop and reconsider my life.',
      },
      {
        name: 'Music',
        description:
          "Don't do anything without music. I build my Spotify playlists by hand, and lately I've been deep into jazz and Brazilian trap.",
      },
      {
        name: 'Motorcycling',
        description:
          "Big fan of bikes. As I'm writing this, I'm in the middle of getting my license — but the concept of a bicycle with a motor strapped to it already makes me happy on its own.",
      },
      {
        name: 'Formula 1',
        description:
          "I follow it more for the engineering than the sport itself. The idea of hundreds of people working a whole year to win back tenths of a second gets me excited in a way that's hard to explain. Rooting for McLaren.",
      },
      {
        name: 'Cars',
        description:
          "I like the engineering, but what really hooks me is when design and history meet. Two favorites for opposite reasons: the Ford Maverick '76, which carries the weight of a very specific era of Brazilian cars, with a silhouette that aged better than it had any right to; and the Toyota Supra Mk4, which kind of accidentally became a legend and has one of the best-resolved rear ends that ever rolled off a factory line.",
      },
      {
        name: 'My Love',
        description:
          "Luisa, my girlfriend and future wife. She's in physiotherapy, and she's the reason I wrote software for a real problem for the first time: the apps for her telerehab research were born right here. She's who I share coffee with, make things out of clay and paint with, and have my best moments with.",
      },
    ],
  },
  timeline: {
    heading: '// career',
    label: 'history --reverse',
    workLabel: 'work',
    eduLabel: 'education',
    work: [
      {
        year: '2025',
        title: 'Software Developer I',
        place: '@ FIEB',
        desc: 'Sep 2025 – present. Full-stack developer on the systems maintenance team, responsible for production applications used across FIEB, SESI and SENAI.',
        bullets: [
          'Maintain and ship features for several production systems in C#/.NET, PHP, Python and SQL',
          'Fully refactored SGC, an internal management system',
          'Building the new public transparency portal for SESI and SENAI',
          'Own changes end to end: database, back end, front end and deployment',
        ],
      },
      {
        year: '2024',
        title: 'Software Development Intern',
        place: '@ FIEB',
        desc: 'Aug 2024 – Jul 2025. Moved from infrastructure into development, working as a de facto junior developer on internal .NET projects.',
        bullets: [
          'Built and maintained web systems in C# and .NET',
          'Worked on both front end and back end of the SESI/SENAI transparency portal',
          'Fixed bugs, wrote tests and handled data in SQL',
          'Hired full-time as Software Developer I at the end of the internship',
        ],
      },
      {
        year: '2023',
        title: 'IT Infrastructure & Helpdesk Intern',
        place: '@ FIEB',
        desc: 'Aug 2023 – Jul 2024. Started at the Federation of Industries of Bahia in infrastructure, supporting staff across the organization.',
        bullets: [
          'Tier 1/Tier 2 support for internal users',
          'Maintained hardware, networks and workstations (Active Directory, Windows)',
          'Troubleshot network services and connectivity in production',
        ],
      },
    ],
    education: [
      {
        year: '2026',
        title: 'Transfer to UNIFACS (Distance Learning)',
        place: '@ UNIFACS',
        desc: 'Switched universities in early 2026. Computer Science bachelor expected May 2027.',
      },
      {
        year: '2022',
        title: 'Started Computer Science Bachelor',
        place: '@ Universidade Jorge Amado',
        desc: 'Started Computer Science at Universidade Jorge Amado. Four years before the transfer.',
      },
      {
        year: '2021',
        title: 'Computer Networks Technician',
        place: '@ SENAI CIMATEC',
        desc: 'Technical course in computer networks (2021–2023). Where the infra foundation comes from.',
      },
    ],
  },
  projects: {
    heading: '// projects',
    label: 'ls ~/code',
    intro: 'A few directories worth opening.',
    viewOnGithub: 'view on github',
    privateBadge: 'private repo · clinical study',
    descriptions: {
      'Waitless':
        'Virtual queue for small businesses: customers scan a QR code, join from their phone, watch their place update live and get a push notification when it\'s their turn. Multi-tenant with Postgres row-level security, Server-Sent Events fanned out across API replicas through Redis, concurrency-safe "call next" with SKIP LOCKED. Next.js + Fastify + BullMQ, Playwright e2e, Kubernetes (k3s + Kustomize).',
      'Jelly':
        'Local, Claude-style AI with real access to the machine it runs on. qwen3:8b through Ollama on the GPU, plus vision, spoken conversation (Whisper in, Kokoro out), semantic search over your own files, and shell/file execution behind an approval gate that shows a diff first. Native GNOME app (GTK4 + WebKit) over a Python Starlette server.',
      'cardio-telerehab':
        'Clinical software for cardiovascular physiotherapy, built with a physiotherapy researcher. Physiotherapists assess patients, classify cardiovascular risk and get an exercise prescription computed from test results; patients follow their plan from home. A companion bedside tool classifies aerobic capacity from a functional test. Live and under clinical validation. Laravel 11 + PostgreSQL (Supabase) on Vercel, role-based access for physiotherapists and patients.',
      'box-box':
        'Formula 1 podium predictor. Users call P1/P2/P3 and DNF count before lights-out, then climb a seasonal accuracy leaderboard. Laravel 11 + Postgres API, React + Vite + TypeScript front, magic-link auth.',
    },
  },
  contact: {
    heading: '// contact',
    label: 'cat contact.txt',
    title: 'Get in Touch',
    email: 'joshuascbritto@gmail.com',
    emailLabel: 'email',
    phone: '+55 (71) 99941-4107',
    phoneLabel: 'phone',
    whatsappMessage: 'Hey! Saw your site, would love to chat.',
    whatsappLabel: 'open whatsapp chat',
    linksLabel: 'elsewhere',
    links: [
      { label: 'github', href: 'https://github.com/Joshuascbritto' },
      { label: 'linkedin', href: 'https://www.linkedin.com/in/joshuastrauch/' },
    ],
    closing: 'I prefer email. I respond within 24 hours, usually faster.',
    copied: 'copied',
  },
  footer: {
    copyright: '© 2026 joshua. all rights reserved.',
    builtWith: 'hand-built. zero UI libraries.',
  },
}

// -------------------------------------------------------------
// PT — Português (Brasil) — DEFAULT
// -------------------------------------------------------------
const pt: Translations = {
  meta: {
    title: 'Joshua Strauch — Engenheiro de Software',
    description: 'Joshua Strauch — engenheiro de software full-stack em Salvador (UTC-3). PHP, Python, C#/.NET, SQL e DevOps. Aberto a vagas remotas.',
  },
  nav: { about: 'sobre', projects: 'projetos', contact: 'contato', resume: 'currículo' },
  hero: {
    kicker: '// olá, mundo',
    title: 'Joshua Strauch',
    subtitle: 'Engenheiro de Software Full-stack',
    stack: 'PHP · Python · C#/.NET · SQL · DevOps',
    intro:
      'Mantenho sistemas em produção de pé, do banco de dados ao deploy. Comecei em redes e infraestrutura, então quando algo quebra consigo depurar abaixo da camada da aplicação.',
    statusLabel: 'status',
    statusValue: 'aberto a vagas remotas',
    locationLabel: 'local',
    locationValue: 'Salvador, Brasil · UTC-3',
    languagesLabel: 'idiomas',
    languagesValue: 'pt nativo · en fluente · ru aprendendo',
  },
  about: {
    heading: '// sobre',
    label: 'README.md',
    bio:
      'Sou desenvolvedor. Mexo na stack inteira porque foi assim que me ensinaram — criar casca grossa, saber se virar quando algo quebra. Software, pra mim, é arquitetura estrutural: precisa aguentar o próximo refactor sem desabar. Aprendo idiomas (humanos e de máquina) porque traduzir é o mais perto que existe de pensar duas vezes. Longe do teclado: Counter-Strike, cozinhar, ler mangá e uma boa praia.',
  },
  languages: {
    heading: '// habilidades',
    label: 'code --skills',
    proficient: 'domínio',
    familiar: 'familiaridade',
  },
  interests: {
    heading: '// interesses',
    label: 'tags --list',
    hint: 'clique em um item pra abrir',
    empty: 'em breve…',
    showAll: 'ver todos',
    showLess: 'ver menos',
    items: [
      {
        name: 'PHP',
        description:
          'Primeira linguagem que levei a sério. É uma linguagem suja — front, back e banco tudo no mesmo arquivo — e tem sua beleza nisso.',
      },
      {
        name: 'Linux',
        description:
          'Foi amor à primeira vista. Uso desde o curso técnico, onde mexia bastante com Ubuntu e Debian, e foi ali que aprendi meus fundamentos de rede e o básico de Linux. Hoje já não consigo voltar — navegar pelo teclado virou extensão da mão.',
      },
      {
        name: 'Código Aberto',
        description:
          'Quando olhava mods de jogos antigos, sempre procurava saber quais tinham código aberto, depois de um incidente em que baixei um mod com vírus. Foi assim que descobri que dava para abrir o mod e ler o código por trás do que estava acontecendo nos bastidores. Nunca mais saí.',
      },
      {
        name: 'Água-viva',
        description:
          'Meu animal preferido. Tem características fascinantes apesar de ser 95% a 99% só água. Por exemplo: dá nome à minha versão preferida do Ubuntu (Jellyfish); algumas espécies brilham no escuro por bioluminescência; não têm cérebro, coração nem pulmão. São só criaturas relax vagando pelo oceano.',
      },
      {
        name: 'Café',
        description:
          'Imagino que vem junto com o gostar da área. Não gostava até me acostumar com o gosto. Hoje já diferencio o normal do extra-forte — infelizmente.',
      },
      {
        name: 'Jogos',
        description:
          'Como muita coisa nessa lista, jogos foram parte enorme da minha jornada com computador e do meu aprendizado: navegação de arquivos, termos como FPS e ms, modificações do jogo original, descobrir o que a minha máquina aguenta rodar. Counter-Strike, Minecraft, Left 4 Dead, Overwatch, Osu! — todos participaram do meu crescimento como usuário ávido de computador.',
      },
      {
        name: 'Programação de Sistemas',
        description:
          'Meu primeiro contato com programação e linha de comando foi com Minecraft, quando era menor. Para baixar o jogo precisava rodar uma série de comandos e fazer alterações até algo funcionar, e para jogar com os amigos tinha que entender de IP e versionamento dos mods. Aprendi na marra, antes de saber que aquilo tinha nome.',
      },
      {
        name: 'Criptografia',
        description:
          'Sempre curti a ideia. Aprendi mais a fundo estudando banco de dados, quando entendi que nem toda informação pode ou deve ser exposta. Peguei boa parte do que sei sobre vulnerabilidades num site famoso, o hackthissite.org — muito top.',
      },
      {
        name: 'Self-Hosting',
        description:
          'Aprendi cedo, usando minha máquina como servidor pra jogar com os amigos à distância. Bons tempos de Minecraft e Terraria.',
      },
      {
        name: 'Vim',
        description:
          'Experiência motivadora e desafiadora do curso técnico. Cada detalhe da navegação tinha que ser entendido do início ao fim. Engraçado lembrar dos amigos se debatendo só pra conseguir sair do editor.',
      },
      {
        name: 'Teclados Mecânicos',
        description:
          'Cresci usando o teclado padrão de notebook, até descobrir em vídeos do YouTube que existia uma "extensão" desse mundo, com aquele barulho a cada clique. Tive que parar e repensar minha vida.',
      },
      {
        name: 'Música',
        description:
          'Não faço nada sem música. Monto minhas playlists na mão no Spotify, e ultimamente tenho curtido bastante jazz e trap brasileiro.',
      },
      {
        name: 'Motociclismo',
        description:
          'Gosto muito de motos. Enquanto escrevo isso, estou tirando a carteira — mas o conceito de uma bicicleta com motor já me deixa feliz por si só.',
      },
      {
        name: 'Fórmula 1',
        description:
          'Acompanho mais pela engenharia do que pelo esporte em si. A ideia de centenas de pessoas trabalhando o ano inteiro pra ganhar décimos de segundo me deixa animado de um jeito que é difícil explicar. Torço pela McLaren.',
      },
      {
        name: 'Carros',
        description:
          'Gosto da engenharia, mas o que me prende mesmo é quando design e história se encontram. Tenho dois favoritos por motivos opostos: o Ford Maverick 76, que carrega aquele peso de carro brasileiro de uma era específica, com uma silhueta que envelheceu melhor do que devia; e o Toyota Supra Mk4, que virou lenda meio sem querer e tem uma das traseiras mais bem resolvidas que já saíram de uma fábrica.',
      },
      {
        name: 'Meu Amor',
        description:
          'Luisa, minha namorada e futura esposa. Ela é de fisioterapia, e foi por ela que escrevi software pra um problema de verdade pela primeira vez: os apps da pesquisa de telerreabilitação dela nasceram aqui. É com ela que divido o café, faço coisas com argila e tinta e tenho os meus melhores momentos.',
      },
    ],
  },
  timeline: {
    heading: '// carreira',
    label: 'history --reverse',
    workLabel: 'trabalho',
    eduLabel: 'formação',
    work: [
      {
        year: '2025',
        title: 'Desenvolvedor de Software I',
        place: '@ FIEB',
        desc: 'Set/2025 – atual. Desenvolvedor full-stack no time de sustentação de sistemas, responsável por aplicações em produção usadas pela FIEB, SESI e SENAI.',
        bullets: [
          'Mantenho e entrego funcionalidades em vários sistemas em produção com C#/.NET, PHP, Python e SQL',
          'Refatorei por completo o SGC, um sistema interno de gestão',
          'Desenvolvo o novo portal de transparência do SESI e do SENAI',
          'Assumo as mudanças de ponta a ponta: banco, back-end, front-end e deploy',
        ],
      },
      {
        year: '2024',
        title: 'Estagiário de Desenvolvimento',
        place: '@ FIEB',
        desc: 'Ago/2024 – jul/2025. Migrei da infraestrutura para o desenvolvimento, atuando na prática como desenvolvedor júnior em projetos internos .NET.',
        bullets: [
          'Desenvolvi e mantive sistemas web em C# e .NET',
          'Atuei no front-end e no back-end do portal de transparência do SESI/SENAI',
          'Corrigi bugs, escrevi testes e tratei dados em SQL',
          'Efetivado como Desenvolvedor de Software I ao fim do estágio',
        ],
      },
      {
        year: '2023',
        title: 'Estagiário de Infraestrutura e Helpdesk',
        place: '@ FIEB',
        desc: 'Ago/2023 – jul/2024. Entrei na Federação das Indústrias do Estado da Bahia pela infraestrutura, dando suporte às equipes da organização.',
        bullets: [
          'Suporte nível 1 e 2 para usuários internos',
          'Manutenção de hardware, redes e estações de trabalho (Active Directory, Windows)',
          'Diagnóstico de serviços de rede e conectividade em produção',
        ],
      },
    ],
    education: [
      {
        year: '2026',
        title: 'Transferência pra UNIFACS EAD',
        place: '@ UNIFACS',
        desc: 'Mudei de faculdade no início de 2026. Bacharelado em Ciência da Computação previsto pra maio de 2027.',
      },
      {
        year: '2022',
        title: 'Início do Bacharelado em Ciência da Computação',
        place: '@ Universidade Jorge Amado',
        desc: 'Comecei Ciência da Computação na Universidade Jorge Amado. Quatro anos antes da transferência.',
      },
      {
        year: '2021',
        title: 'Técnico em Rede de Computadores',
        place: '@ SENAI CIMATEC',
        desc: 'Curso técnico em redes de computadores (2021–2023). É de onde vem a base de infra.',
      },
    ],
  },
  projects: {
    heading: '// projetos',
    label: 'ls ~/code',
    intro: 'Alguns diretórios que valem abrir.',
    viewOnGithub: 'ver no github',
    privateBadge: 'repo privado · estudo clínico',
    descriptions: {
      'Waitless':
        'Fila virtual para pequenos negócios: o cliente escaneia um QR code, entra na fila pelo celular, vê a posição atualizar ao vivo e recebe uma notificação quando chega a vez. Multi-tenant com row-level security no Postgres, Server-Sent Events distribuídos entre réplicas da API via Redis, "chamar próximo" seguro sob concorrência com SKIP LOCKED. Next.js + Fastify + BullMQ, e2e com Playwright, Kubernetes (k3s + Kustomize).',
      'Jelly':
        'IA local no estilo Claude, com acesso de verdade à máquina onde roda. qwen3:8b via Ollama na GPU, mais visão, conversa falada (Whisper na entrada, Kokoro na saída), busca semântica nos seus próprios arquivos e execução de comandos e arquivos atrás de uma aprovação que mostra o diff antes. App nativo do GNOME (GTK4 + WebKit) sobre servidor Starlette em Python.',
      'cardio-telerehab':
        'Software clínico para fisioterapia cardiovascular, feito junto com uma pesquisadora de fisioterapia. O fisioterapeuta avalia o paciente, classifica o risco cardiovascular e recebe uma prescrição de exercício calculada a partir dos testes; o paciente acompanha o plano de casa. Uma ferramenta irmã, de beira de leito, classifica a capacidade aeróbica a partir de um teste funcional. No ar e em validação clínica. Laravel 11 + PostgreSQL (Supabase) na Vercel, acesso por perfil para fisioterapeutas e pacientes.',
      'box-box':
        'Palpiteiro de pódio da Fórmula 1. O usuário crava P1/P2/P3 e número de DNFs antes do semáforo apagar e disputa um ranking sazonal por precisão. API em Laravel 11 + Postgres, front em React + Vite + TypeScript, login por magic link.',
    },
  },
  contact: {
    heading: '// contato',
    label: 'cat contato.txt',
    title: 'Entre em Contato',
    email: 'joshuascbritto@gmail.com',
    emailLabel: 'e-mail',
    phone: '+55 (71) 99941-4107',
    phoneLabel: 'telefone',
    whatsappMessage: 'Olá! Vi seu site, quero conversar mais com você.',
    whatsappLabel: 'abrir conversa no whatsapp',
    linksLabel: 'em outros lugares',
    links: [
      { label: 'github', href: 'https://github.com/Joshuascbritto' },
      { label: 'linkedin', href: 'https://www.linkedin.com/in/joshuastrauch/' },
    ],
    closing: 'Prefiro e-mail. Respondo em até 24 horas, normalmente bem mais rápido.',
    copied: 'copiado',
  },
  footer: {
    copyright: '© 2026 joshua. todos os direitos reservados.',
    builtWith: 'feito à mão. zero bibliotecas de UI.',
  },
}

// -------------------------------------------------------------
// RU — Русский
// -------------------------------------------------------------
const ru: Translations = {
  meta: {
    title: 'Joshua Strauch — инженер-программист',
    description: 'Joshua Strauch — full-stack инженер-программист из Салвадора, Бразилия (UTC-3). PHP, Python, C#/.NET, SQL и DevOps. Открыт к удалённой работе.',
  },
  nav: { about: 'обо мне', projects: 'проекты', contact: 'контакт', resume: 'резюме' },
  hero: {
    kicker: '// привет, мир',
    title: 'Joshua Strauch',
    subtitle: 'Full-stack инженер-программист',
    stack: 'PHP · Python · C#/.NET · SQL · DevOps',
    intro:
      'Поддерживаю продакшен-системы — от базы данных до деплоя. Начинал с сетей и инфраструктуры, поэтому, когда что-то ломается, могу отлаживать ниже уровня приложения.',
    statusLabel: 'статус',
    statusValue: 'открыт к удалённой работе',
    locationLabel: 'локация',
    locationValue: 'Салвадор, Бразилия · UTC-3',
    languagesLabel: 'языки',
    languagesValue: 'pt родной · en свободно · ru изучаю',
  },
  about: {
    heading: '// обо мне',
    label: 'README.md',
    bio:
      'Я разработчик. Работаю по всему стеку, потому что так меня учили — отращивать толстую шкуру и самому разбираться, когда что-то ломается. Софт для меня — несущая архитектура: должен пережить следующий рефакторинг, не сложившись. Учу языки (человеческие и машинные), потому что переводить — это ближе всего к тому, чтобы подумать дважды. Вдали от клавиатуры — Counter-Strike, готовка, манга и хороший пляж.',
  },
  languages: {
    heading: '// навыки',
    label: 'code --skills',
    proficient: 'уверенно',
    familiar: 'знаком',
  },
  interests: {
    heading: '// интересы',
    label: 'tags --list',
    hint: 'нажмите на пункт, чтобы развернуть',
    empty: 'скоро…',
    showAll: 'показать все',
    showLess: 'свернуть',
    items: [
      {
        name: 'PHP',
        description:
          'Первый язык, к которому я отнёсся всерьёз. Грязный язык — фронт, бэк и база всё в одном файле — и в этом своя красота.',
      },
      {
        name: 'Linux',
        description:
          'Любовь с первого взгляда. Пользуюсь со времён техникума, где много возился с Ubuntu и Debian — там же подтянул базу по сетям и основы Linux. Сейчас уже не могу обратно — навигация с клавиатуры стала продолжением руки.',
      },
      {
        name: 'Open Source',
        description:
          'Когда залипал в моды для старых игр, всегда искал те, что с открытым исходником — после одного случая, когда скачал мод с вирусом. Так и узнал, что мод можно вскрыть и прочитать, что там творится за кулисами. Так и остался.',
      },
      {
        name: 'Медузы',
        description:
          'Моё любимое животное. Удивительные создания, хотя на 95–99% состоят из одной воды. Несколько фактов: они дали название моему любимому релизу Ubuntu (Jellyfish); некоторые виды светятся в темноте за счёт биолюминесценции; у них нет ни мозга, ни сердца, ни лёгких. Просто расслабленные создания, дрейфующие по океану.',
      },
      {
        name: 'Кофе',
        description:
          'Видимо, прилагается к профессии. Не нравился, пока не привык ко вкусу. Сейчас уже отличаю обычный от крепкого — к сожалению.',
      },
      {
        name: 'Игры',
        description:
          'Как и многое в этом списке, игры были огромной частью моего пути в компах и того, как я учился: навигация по файлам, термины вроде FPS и ms, модификации оригинальной игры, выяснение того, что моя машина вообще тянет. Counter-Strike, Minecraft, Left 4 Dead, Overwatch, Osu! — все они приложились к тому, чтобы я вырос в заядлого пользователя компьютера.',
      },
      {
        name: 'Системное программирование',
        description:
          'Моё первое знакомство с программированием и командной строкой случилось через Minecraft, ещё в детстве. Чтобы запустить игру, нужно было выполнить целую серию команд и что-то править, пока всё не заработает, а чтобы поиграть с друзьями — разобраться с IP и версионированием модов. Учился на ходу, ещё не зная, что у всего этого есть название.',
      },
      {
        name: 'Криптография',
        description:
          'Всегда нравилась сама идея. Глубже зашёл, когда изучал базы данных и понял, что не всякую информацию можно и нужно показывать. Большую часть того, что знаю про уязвимости, подобрал на одном известном сайте — hackthissite.org. Очень крутая штука.',
      },
      {
        name: 'Self-hosting',
        description:
          'Освоил рано — использовал свой комп как сервер, чтобы играть с друзьями на расстоянии. Хорошие были времена с Minecraft и Terraria.',
      },
      {
        name: 'Vim',
        description:
          'Опыт из техникума — одновременно мотивирующий и тяжёлый. Каждую мелочь в навигации приходилось разбирать от и до. Смешно вспоминать, как друзья мучились, просто чтобы выйти из редактора.',
      },
      {
        name: 'Механические клавиатуры',
        description:
          'Вырос на стандартной клавиатуре ноутбука, пока в YouTube не наткнулся на целое "расширение" этого мира, с тем самым звуком на каждом нажатии. Пришлось остановиться и переосмыслить свою жизнь.',
      },
      {
        name: 'Музыка',
        description:
          'Ничего не делаю без музыки. Плейлисты в Spotify собираю руками, и в последнее время сильно подсел на джаз и бразильский трэп.',
      },
      {
        name: 'Мотоциклы',
        description:
          'Очень люблю мотоциклы. Пока пишу это, как раз получаю права — но сама идея велосипеда с мотором уже сама по себе делает меня счастливым.',
      },
      {
        name: 'Формула 1',
        description:
          'Смотрю больше ради инженерии, чем ради самого спорта. Идея, что сотни людей целый год работают, чтобы выиграть десятые доли секунды, заводит меня так, что трудно объяснить. Болею за McLaren.',
      },
      {
        name: 'Автомобили',
        description:
          "Мне нравится инженерия, но цепляет именно стык дизайна и истории. Двое любимых по противоположным причинам: Ford Maverick '76, на котором лежит груз очень конкретной эпохи бразильского автопрома, с силуэтом, который состарился лучше, чем должен был; и Toyota Supra Mk4, ставшая легендой как-то случайно, с одной из самых красивых задних частей, какие когда-либо сходили с конвейера.",
      },
      {
        name: 'Моя любовь',
        description:
          'Луиза, моя девушка и будущая жена. Она занимается физиотерапией, и именно ради неё я впервые написал софт для настоящей задачи: приложения для её исследования по телереабилитации родились здесь. С ней я делю кофе, леплю из глины, рисую красками и провожу свои лучшие моменты.',
      },
    ],
  },
  timeline: {
    heading: '// карьера',
    label: 'history --reverse',
    workLabel: 'работа',
    eduLabel: 'образование',
    work: [
      {
        year: '2025',
        title: 'Разработчик ПО I',
        place: '@ FIEB',
        desc: 'Сен 2025 – н.в. Full-stack разработчик в команде сопровождения систем, отвечаю за продакшен-приложения FIEB, SESI и SENAI.',
        bullets: [
          'Поддерживаю и развиваю несколько продакшен-систем на C#/.NET, PHP, Python и SQL',
          'Полностью отрефакторил SGC — внутреннюю систему управления',
          'Разрабатываю новый портал прозрачности SESI и SENAI',
          'Веду изменения от начала до конца: база данных, бэкенд, фронтенд и деплой',
        ],
      },
      {
        year: '2024',
        title: 'Стажёр-разработчик',
        place: '@ FIEB',
        desc: 'Авг 2024 – июл 2025. Перешёл из инфраструктуры в разработку, фактически работал младшим разработчиком на внутренних .NET-проектах.',
        bullets: [
          'Разрабатывал и поддерживал веб-системы на C# и .NET',
          'Работал над фронтендом и бэкендом портала прозрачности SESI/SENAI',
          'Исправлял баги, писал тесты и работал с данными в SQL',
          'По итогам стажировки принят в штат Разработчиком ПО I',
        ],
      },
      {
        year: '2023',
        title: 'Стажёр ИТ-инфраструктуры и техподдержки',
        place: '@ FIEB',
        desc: 'Авг 2023 – июл 2024. Пришёл в Федерацию промышленности штата Баия через инфраструктуру, поддерживал сотрудников организации.',
        bullets: [
          'Техподдержка 1-й и 2-й линии для внутренних пользователей',
          'Обслуживание оборудования, сетей и рабочих станций (Active Directory, Windows)',
          'Диагностика сетевых сервисов и подключения в продакшене',
        ],
      },
    ],
    education: [
      {
        year: '2026',
        title: 'Перевод в UNIFACS (дистанционное обучение)',
        place: '@ UNIFACS',
        desc: 'В начале 2026 перевёлся в другой вуз. Бакалавр по информатике — защита в мае 2027.',
      },
      {
        year: '2022',
        title: 'Начало бакалавриата по информатике',
        place: '@ Universidade Jorge Amado',
        desc: 'Начал учиться на информатике в Universidade Jorge Amado. Четыре года до перевода.',
      },
      {
        year: '2021',
        title: 'Техник по компьютерным сетям',
        place: '@ SENAI CIMATEC',
        desc: 'Технический курс по компьютерным сетям (2021–2023). Отсюда база по инфраструктуре.',
      },
    ],
  },
  projects: {
    heading: '// проекты',
    label: 'ls ~/code',
    intro: 'Пара директорий, которые стоит открыть.',
    viewOnGithub: 'смотреть на github',
    privateBadge: 'приватный репозиторий · клиническое исследование',
    descriptions: {
      'Waitless':
        'Виртуальная очередь для малого бизнеса: клиент сканирует QR-код, встаёт в очередь с телефона, видит своё место в реальном времени и получает push-уведомление, когда подходит его очередь. Мультитенантность на row-level security в Postgres, Server-Sent Events с рассылкой между репликами API через Redis, безопасный при конкуренции «вызвать следующего» на SKIP LOCKED. Next.js + Fastify + BullMQ, e2e на Playwright, Kubernetes (k3s + Kustomize).',
      'Jelly':
        'Локальный ИИ в духе Claude с настоящим доступом к машине, на которой запущен. qwen3:8b через Ollama на GPU, плюс зрение, голосовой диалог (Whisper на входе, Kokoro на выходе), семантический поиск по собственным файлам и выполнение команд и правок файлов через подтверждение, которое сначала показывает диф. Нативное приложение GNOME (GTK4 + WebKit) поверх сервера на Python (Starlette).',
      'cardio-telerehab':
        'Клиническое ПО для кардиологической физиотерапии, созданное вместе с исследователем-физиотерапевтом. Физиотерапевт оценивает пациента, классифицирует сердечно-сосудистый риск и получает программу упражнений, рассчитанную по результатам тестов; пациент следует плану из дома. Сопутствующий инструмент у постели больного классифицирует аэробную ёмкость по функциональному тесту. Работает в продакшене и проходит клиническую валидацию. Laravel 11 + PostgreSQL (Supabase) на Vercel, доступ по ролям для физиотерапевтов и пациентов.',
      'box-box':
        'Прогнозы на подиум Формулы 1. Игрок называет P1/P2/P3 и число сходов до старта и борется за сезонный рейтинг точности. API на Laravel 11 + Postgres, фронт на React + Vite + TypeScript, вход по magic-link.',
    },
  },
  contact: {
    heading: '// контакт',
    label: 'cat contact.txt',
    title: 'Связаться',
    email: 'joshuascbritto@gmail.com',
    emailLabel: 'эл. почта',
    phone: '+55 (71) 99941-4107',
    phoneLabel: 'телефон',
    whatsappMessage: 'Привет! Видел ваш сайт, хочу пообщаться.',
    whatsappLabel: 'открыть чат в whatsapp',
    linksLabel: 'в других местах',
    links: [
      { label: 'github', href: 'https://github.com/Joshuascbritto' },
      { label: 'linkedin', href: 'https://www.linkedin.com/in/joshuastrauch/' },
    ],
    closing: 'Предпочитаю электронную почту. Отвечаю в течение 24 часов, обычно гораздо быстрее.',
    copied: 'скопировано',
  },
  footer: {
    copyright: '© 2026 joshua. все права защищены.',
    builtWith: 'сделано руками. без UI-библиотек.',
  },
}

export const translations: Record<Locale, Translations> = { pt, en, ru }
