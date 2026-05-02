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
  interests: {
    heading: string
    label: string
    empty: string
    items: { name: string; description: string }[]
  }
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
    empty: 'soon…',
    items: [
      {
        name: 'Systems Programming',
        description:
          "My first contact with programming and the command line was through Minecraft, back when I was a kid. To get the game running I had to chain a bunch of commands and tweak things until something worked, and to play with friends I had to figure out IPs and mod versioning. I learned the hard way, before I knew any of it had a name.",
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
        name: 'Cryptography',
        description:
          "Always liked the idea. Picked it up more seriously while studying databases, when it clicked that not every piece of information can or should be exposed. A lot of what I know about vulnerabilities I learned on a famous site, hackthissite.org — really good stuff.",
      },
      {
        name: 'Mechanical Keyboards',
        description:
          'Grew up on the stock laptop keyboard, until I found out from YouTube videos that there was a whole "extension" of that world out there — that satisfying noise on every click. Had to stop and reconsider my life.',
      },
      {
        name: 'Coffee',
        description:
          "Comes with the territory, I figure. Didn't like it until I got used to the taste. Now I can tell regular from extra-strong — unfortunately.",
      },
      {
        name: 'Vim',
        description:
          "Equal parts motivating and brutal — courtesy of technical school. Every navigation detail had to be understood end to end. Funny remembering friends flailing just to figure out how to quit the editor.",
      },
      {
        name: 'Self-Hosting',
        description:
          "Picked it up early, using my own machine as a server to play with friends remotely. Good days of Minecraft and Terraria.",
      },
      {
        name: 'Games',
        description:
          "Like a lot of things on this list, games were a huge part of my computer journey and what I learned along the way: file navigation, terms like FPS and ms, modding the base game, figuring out what my rig could handle. Counter-Strike, Minecraft, Left 4 Dead, Overwatch, Osu! — all of them played a part in growing me into a heavy computer user.",
      },
      {
        name: 'Jellyfish',
        description:
          "My favorite animal. Fascinating creatures despite being 95–99% just water. For example: they're the namesake of my favorite Ubuntu release (Jellyfish); some species glow in the dark via bioluminescence; they have no brain, no heart, and no lungs. Just chill creatures drifting around the ocean.",
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
        name: 'PHP',
        description:
          "First language I took seriously. It's a messy language — front, back, and database all in the same file — and there's a kind of beauty in that.",
      },
    ],
  },
  timeline: {
    heading: '// career',
    label: 'history --reverse',
    entries: [
      {
        year: '2026',
        title: 'Transfer to UNIFACS (Distance Learning)',
        place: '@ UNIFACS',
        desc: 'Switched universities in early 2026. Computer Science bachelor expected May 2027.',
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
    stars: 'stars',
    forks: 'forks',
    descriptions: {
      'Landing-Josh':
        "The portfolio site you're looking at. Digital brutalism, dark terminal, three languages (PT/EN/RU), zero UI libs. Vite + React 18 + strict TypeScript, hand-rolled CSS.",
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
    copied: 'copied',
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
    empty: 'em breve…',
    items: [
      {
        name: 'Programação de Sistemas',
        description:
          'Meu primeiro contato com programação e linha de comando foi com Minecraft, quando era menor. Para baixar o jogo precisava rodar uma série de comandos e fazer alterações até algo funcionar, e para jogar com os amigos tinha que entender de IP e versionamento dos mods. Aprendi na marra, antes de saber que aquilo tinha nome.',
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
        name: 'Criptografia',
        description:
          'Sempre curti a ideia. Aprendi mais a fundo estudando banco de dados, quando entendi que nem toda informação pode ou deve ser exposta. Peguei boa parte do que sei sobre vulnerabilidades num site famoso, o hackthissite.org — muito top.',
      },
      {
        name: 'Teclados Mecânicos',
        description:
          'Cresci usando o teclado padrão de notebook, até descobrir em vídeos do YouTube que existia uma "extensão" desse mundo, com aquele barulho a cada clique. Tive que parar e repensar minha vida.',
      },
      {
        name: 'Café',
        description:
          'Imagino que vem junto com o gostar da área. Não gostava até me acostumar com o gosto. Hoje já diferencio o normal do extra-forte — infelizmente.',
      },
      {
        name: 'Vim',
        description:
          'Experiência motivadora e desafiadora do curso técnico. Cada detalhe da navegação tinha que ser entendido do início ao fim. Engraçado lembrar dos amigos se debatendo só pra conseguir sair do editor.',
      },
      {
        name: 'Self-Hosting',
        description:
          'Aprendi cedo, usando minha máquina como servidor pra jogar com os amigos à distância. Bons tempos de Minecraft e Terraria.',
      },
      {
        name: 'Jogos',
        description:
          'Como muita coisa nessa lista, jogos foram parte enorme da minha jornada com computador e do meu aprendizado: navegação de arquivos, termos como FPS e ms, modificações do jogo original, descobrir o que a minha máquina aguenta rodar. Counter-Strike, Minecraft, Left 4 Dead, Overwatch, Osu! — todos participaram do meu crescimento como usuário ávido de computador.',
      },
      {
        name: 'Água-viva',
        description:
          'Meu animal preferido. Tem características fascinantes apesar de ser 95% a 99% só água. Por exemplo: dá nome à minha versão preferida do Ubuntu (Jellyfish); algumas espécies brilham no escuro por bioluminescência; não têm cérebro, coração nem pulmão. São só criaturas relax vagando pelo oceano.',
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
        name: 'PHP',
        description:
          'Primeira linguagem que levei a sério. É uma linguagem suja — front, back e banco tudo no mesmo arquivo — e tem sua beleza nisso.',
      },
    ],
  },
  timeline: {
    heading: '// carreira',
    label: 'history --reverse',
    entries: [
      {
        year: '2026',
        title: 'Transferência pra UNIFACS EAD',
        place: '@ UNIFACS',
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
    stars: 'estrelas',
    forks: 'forks',
    descriptions: {
      'Landing-Josh':
        'O site de portfólio que você está vendo. Brutalismo digital, terminal escuro, três idiomas (PT/EN/RU), zero libs de UI. Vite + React 18 + TypeScript estrito, CSS na unha.',
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
    copied: 'copiado',
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
    empty: 'скоро…',
    items: [
      {
        name: 'Системное программирование',
        description:
          'Моё первое знакомство с программированием и командной строкой случилось через Minecraft, ещё в детстве. Чтобы запустить игру, нужно было выполнить целую серию команд и что-то править, пока всё не заработает, а чтобы поиграть с друзьями — разобраться с IP и версионированием модов. Учился на ходу, ещё не зная, что у всего этого есть название.',
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
        name: 'Криптография',
        description:
          'Всегда нравилась сама идея. Глубже зашёл, когда изучал базы данных и понял, что не всякую информацию можно и нужно показывать. Большую часть того, что знаю про уязвимости, подобрал на одном известном сайте — hackthissite.org. Очень крутая штука.',
      },
      {
        name: 'Механические клавиатуры',
        description:
          'Вырос на стандартной клавиатуре ноутбука, пока в YouTube не наткнулся на целое "расширение" этого мира, с тем самым звуком на каждом нажатии. Пришлось остановиться и переосмыслить свою жизнь.',
      },
      {
        name: 'Кофе',
        description:
          'Видимо, прилагается к профессии. Не нравился, пока не привык ко вкусу. Сейчас уже отличаю обычный от крепкого — к сожалению.',
      },
      {
        name: 'Vim',
        description:
          'Опыт из техникума — одновременно мотивирующий и тяжёлый. Каждую мелочь в навигации приходилось разбирать от и до. Смешно вспоминать, как друзья мучились, просто чтобы выйти из редактора.',
      },
      {
        name: 'Self-hosting',
        description:
          'Освоил рано — использовал свой комп как сервер, чтобы играть с друзьями на расстоянии. Хорошие были времена с Minecraft и Terraria.',
      },
      {
        name: 'Игры',
        description:
          'Как и многое в этом списке, игры были огромной частью моего пути в компах и того, как я учился: навигация по файлам, термины вроде FPS и ms, модификации оригинальной игры, выяснение того, что моя машина вообще тянет. Counter-Strike, Minecraft, Left 4 Dead, Overwatch, Osu! — все они приложились к тому, чтобы я вырос в заядлого пользователя компьютера.',
      },
      {
        name: 'Медузы',
        description:
          'Моё любимое животное. Удивительные создания, хотя на 95–99% состоят из одной воды. Несколько фактов: они дали название моему любимому релизу Ubuntu (Jellyfish); некоторые виды светятся в темноте за счёт биолюминесценции; у них нет ни мозга, ни сердца, ни лёгких. Просто расслабленные создания, дрейфующие по океану.',
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
        name: 'PHP',
        description:
          'Первый язык, к которому я отнёсся всерьёз. Грязный язык — фронт, бэк и база всё в одном файле — и в этом своя красота.',
      },
    ],
  },
  timeline: {
    heading: '// карьера',
    label: 'history --reverse',
    entries: [
      {
        year: '2026',
        title: 'Перевод в UNIFACS (дистанционное обучение)',
        place: '@ UNIFACS',
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
    stars: 'звёзд',
    forks: 'форков',
    descriptions: {
      'Landing-Josh':
        'Сайт-портфолио, который вы сейчас смотрите. Цифровой брутализм, тёмный терминал, три языка (PT/EN/RU), без UI-библиотек. Vite + React 18 + строгий TypeScript, CSS вручную.',
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
    copied: 'скопировано',
  },
  footer: {
    copyright: '© 2026 joshua. все права защищены.',
    builtWith: 'сделано руками. ни один фреймворк не пострадал.',
  },
}

export const translations: Record<Locale, Translations> = { pt, en, ru }
