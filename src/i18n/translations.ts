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
}

interface ContactLink {
  label: string
  href: string
}

export interface Translations {
  meta: { title: string; description: string }
  nav: { about: string; projects: string; contact: string }
  hero: {
    kicker: string
    title: string
    subtitle: string
    intro: string
    statusLabel: string
    statusValue: string
    locationLabel: string
    locationValue: string
    languagesLabel: string
    languagesValue: string
  }
  about: { heading: string; label: string; bio: string }
  languages: { heading: string; label: string }
  interests: { heading: string; label: string; items: string[] }
  timeline: { heading: string; label: string; entries: TimelineEntry[] }
  projects: {
    heading: string
    label: string
    intro: string
    viewOnGithub: string
    stars: string
    forks: string
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
    linksLabel: string
    links: ContactLink[]
    closing: string
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
    title: 'Josh',
    description: 'Joshua — Computer Scientist. Personal portfolio.',
  },
  nav: { about: 'about', projects: 'projects', contact: 'contact' },
  hero: {
    kicker: '// hello, world',
    title: 'Joshua Strauch',
    subtitle: 'Computer Scientist, under construction',
    // PLACEHOLDER (en): your real intro line
    intro:
      'I build systems from the metal up. Trilingual by training (PT/EN/RU), low-level by instinct, restless by default.',
    statusLabel: 'status',
    statusValue: 'online',
    locationLabel: 'location',
    locationValue: 'somewhere with wi-fi',
    languagesLabel: 'lang',
    languagesValue: 'pt · en · ru',
  },
  about: {
    heading: '// about',
    label: 'README.md',
    bio:
      "I'm a developer. I work full-stack because that's how I learned the craft — develop a thick skin, figure things out when something breaks. Software, to me, is structural architecture: it has to outlast the next refactor without collapsing. I learn languages (human and machine) because translating is the closest thing there is to thinking twice. I'm hooked on Counter-Strike. Off the keyboard the day belongs to cooking, manga, and a good beach.",
  },
  languages: {
    heading: '// languages',
    label: 'code --langs',
  },
  interests: {
    heading: '// interests',
    label: 'tags --list',
    // PLACEHOLDER (en): edit list freely
    items: [
      'Systems Programming',
      'Linux',
      'Open Source',
      'Cryptography',
      'Mechanical Keyboards',
      'Coffee',
      'Vim',
      'Self-Hosting',
      'Games',
      'Jellyfish',
      'Music',
      'Motorcycling',
      'Formula 1',
      'Cars',
      'PHP',
    ],
  },
  timeline: {
    heading: '// career',
    label: 'history --reverse',
    entries: [
      {
        year: '2026',
        title: 'Transfer to FACS EAD',
        place: '@ FACS',
        desc: 'Switched universities in early 2026. CS bachelor expected May 2027.',
      },
      {
        year: '2025',
        title: 'Hired as Developer I',
        place: '@ FIEB',
        desc: 'September 2025: hired as Developer I, ending the internship. Working with C#, .NET, Python, web stack, and SQL. Main project: new SESI/SENAI transparency portal.',
      },
      {
        year: '2023',
        title: 'IT Intern',
        place: '@ FIEB',
        desc: 'Joined the Federation of Industries of Bahia in August 2023, in Salvador.',
      },
      {
        year: '2022',
        title: 'Started CS Bachelor',
        place: '@ Unijorge',
        desc: 'Started Computer Science at Unijorge. Four years before the transfer.',
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
    stars: 'stars',
    forks: 'forks',
    descriptions: {
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
    linksLabel: 'elsewhere',
    links: [
      { label: 'github', href: 'https://github.com/Joshuascbritto' },
      { label: 'linkedin', href: 'https://www.linkedin.com/in/joshua-britto-143577297/' },
    ],
    closing: 'I prefer email. I respond within 24 hours, usually faster.',
  },
  footer: {
    copyright: '© 2026 joshua. all rights reserved.',
    builtWith: 'hand-built. no frameworks were harmed.',
  },
}

// -------------------------------------------------------------
// PT — Português (Brasil) — DEFAULT
// -------------------------------------------------------------
const pt: Translations = {
  meta: {
    title: 'Josh',
    description: 'Joshua — Cientista da Computação. Portfólio pessoal.',
  },
  nav: { about: 'sobre', projects: 'projetos', contact: 'contato' },
  hero: {
    kicker: '// olá, mundo',
    title: 'Joshua Strauch',
    subtitle: 'Cientista da Computação, em construção',
    // PLACEHOLDER (pt): linha real de introdução
    intro:
      'Construo sistemas do metal pra cima. Trilíngue por treino (PT/EN/RU), baixo nível por instinto, inquieto por padrão.',
    statusLabel: 'status',
    statusValue: 'online',
    locationLabel: 'local',
    locationValue: 'algum lugar com wi-fi',
    languagesLabel: 'idiomas',
    languagesValue: 'pt · en · ru',
  },
  about: {
    heading: '// sobre',
    label: 'README.md',
    bio:
      'Sou desenvolvedor. Mexo na stack inteira porque foi assim que me ensinaram — criar casca grossa, saber se virar quando algo quebra. Software, pra mim, é arquitetura estrutural: precisa aguentar o próximo refactor sem desabar. Aprendo idiomas (humanos e de máquina) porque traduzir é o mais perto que existe de pensar duas vezes. Sou viciado em Counter-Strike. Longe do teclado a vida é cozinhar, ler mangá e uma boa praia.',
  },
  languages: {
    heading: '// linguagens',
    label: 'code --langs',
  },
  interests: {
    heading: '// interesses',
    label: 'tags --list',
    // PLACEHOLDER (pt): edite a lista livremente
    items: [
      'Programação de Sistemas',
      'Linux',
      'Código Aberto',
      'Criptografia',
      'Teclados Mecânicos',
      'Café',
      'Vim',
      'Self-Hosting',
      'Jogos',
      'Água-viva',
      'Música',
      'Motociclismo',
      'Fórmula 1',
      'Carros',
      'PHP',
    ],
  },
  timeline: {
    heading: '// carreira',
    label: 'history --reverse',
    entries: [
      {
        year: '2026',
        title: 'Transferência pra FACS EAD',
        place: '@ FACS',
        desc: 'Mudei de faculdade no início de 2026. Bacharelado em Ciência da Computação previsto pra maio de 2027.',
      },
      {
        year: '2025',
        title: 'Contratado como Desenvolvedor I',
        place: '@ FIEB',
        desc: 'Setembro/2025: contratado como Desenvolvedor I, encerrando o estágio. Trabalho com C#, .NET, Python, web e SQL. Projeto principal: novo portal de transparência do SESI/SENAI.',
      },
      {
        year: '2023',
        title: 'Estagiário de TI',
        place: '@ FIEB',
        desc: 'Entrei na Federação das Indústrias do Estado da Bahia em agosto de 2023, em Salvador.',
      },
      {
        year: '2022',
        title: 'Início do Bacharelado em CC',
        place: '@ Unijorge',
        desc: 'Comecei Ciência da Computação na Unijorge. Quatro anos antes da transferência.',
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
    stars: 'estrelas',
    forks: 'forks',
    descriptions: {
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
    linksLabel: 'em outros lugares',
    links: [
      { label: 'github', href: 'https://github.com/Joshuascbritto' },
      { label: 'linkedin', href: 'https://www.linkedin.com/in/joshua-britto-143577297/' },
    ],
    closing: 'Prefiro e-mail. Respondo em até 24 horas, normalmente bem mais rápido.',
  },
  footer: {
    copyright: '© 2026 joshua. todos os direitos reservados.',
    builtWith: 'feito à mão. nenhum framework foi ferido.',
  },
}

// -------------------------------------------------------------
// RU — Русский
// -------------------------------------------------------------
const ru: Translations = {
  meta: {
    title: 'Josh',
    description: 'Joshua — специалист по информатике. Личный портфолио.',
  },
  nav: { about: 'обо мне', projects: 'проекты', contact: 'контакт' },
  hero: {
    kicker: '// привет, мир',
    title: 'Joshua Strauch',
    subtitle: 'Специалист по информатике, в разработке',
    // PLACEHOLDER (ru): реальная вводная строка
    intro:
      'Я строю системы снизу вверх — от железа. Трёхъязычен по навыку (PT/EN/RU), низкий уровень — по инстинкту, беспокойство — по умолчанию.',
    statusLabel: 'статус',
    statusValue: 'онлайн',
    locationLabel: 'локация',
    locationValue: 'где-то с wi-fi',
    languagesLabel: 'языки',
    languagesValue: 'pt · en · ru',
  },
  about: {
    heading: '// обо мне',
    label: 'README.md',
    bio:
      'Я разработчик. Работаю по всему стеку, потому что так меня учили — отращивать толстую шкуру и самому разбираться, когда что-то ломается. Софт для меня — несущая архитектура: должен пережить следующий рефакторинг, не сложившись. Учу языки (человеческие и машинные), потому что переводить — это ближе всего к тому, чтобы подумать дважды. Подсел на Counter-Strike. Вдали от клавиатуры день уходит на готовку, мангу и хороший пляж.',
  },
  languages: {
    heading: '// языки',
    label: 'code --langs',
  },
  interests: {
    heading: '// интересы',
    label: 'tags --list',
    // PLACEHOLDER (ru): свободно редактируемый список
    items: [
      'Системное программирование',
      'Linux',
      'Open Source',
      'Криптография',
      'Механические клавиатуры',
      'Кофе',
      'Vim',
      'Self-hosting',
      'Игры',
      'Медузы',
      'Музыка',
      'Мотоциклы',
      'Формула 1',
      'Автомобили',
      'PHP',
    ],
  },
  timeline: {
    heading: '// карьера',
    label: 'history --reverse',
    entries: [
      {
        year: '2026',
        title: 'Перевод в FACS EAD',
        place: '@ FACS',
        desc: 'В начале 2026 перевёлся в другой вуз. Бакалавр по информатике — защита в мае 2027.',
      },
      {
        year: '2025',
        title: 'Стал Разработчиком I',
        place: '@ FIEB',
        desc: 'Сентябрь 2025: принят на должность Разработчика I, стажировка завершена. Работаю с C#, .NET, Python, веб-стеком и SQL. Главный проект — новый портал прозрачности SESI/SENAI.',
      },
      {
        year: '2023',
        title: 'Стажёр ИТ',
        place: '@ FIEB',
        desc: 'Пришёл в Федерацию промышленности штата Баия (Салвадор) в августе 2023.',
      },
      {
        year: '2022',
        title: 'Начало бакалавриата по CS',
        place: '@ Unijorge',
        desc: 'Начал учиться на информатике в Unijorge. Четыре года до перевода.',
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
    stars: 'звёзд',
    forks: 'форков',
    descriptions: {
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
    linksLabel: 'в других местах',
    links: [
      { label: 'github', href: 'https://github.com/Joshuascbritto' },
      { label: 'linkedin', href: 'https://www.linkedin.com/in/joshua-britto-143577297/' },
    ],
    closing: 'Предпочитаю электронную почту. Отвечаю в течение 24 часов, обычно гораздо быстрее.',
  },
  footer: {
    copyright: '© 2026 joshua. все права защищены.',
    builtWith: 'сделано руками. ни один фреймворк не пострадал.',
  },
}

export const translations: Record<Locale, Translations> = { pt, en, ru }
