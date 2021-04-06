import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '양성훈 포트폴리오', // e.g: 'Name | Developer'
  lang: 'kr', // e.g: en, es, fr, jp
  description: '열정있는 개발자 양성훈의 이야기', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '안녕하세요,',
  name: 'asd입니다.',
  subtitle: '저는 열정있는 개발자입니다.',
  cta: '더 알아보기',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    '안녕하세요, 저는 명지대학교 융합소프트웨어학부 데이터테크놀리지전공 양성훈입니다. 저는 학교를 다니면서 개발자에 길에 들어가게 되었고 그 과정에서 정말 다양한 분야를 배우고 관련 프로젝트를 진행하였습니다. 이렇듯 어떤 분야든 열정을 가지고 최선을 다하는 것이 저의 장점이라고 생각합니다.',
  paragraphTwo:
    '또한 저는 개발자로써 활동뿐만 아니라 학교를 다니면서 다양한 활동을 통해 많은 경험을 하였습니다. 2학년 때에는 봉사 동아리 회장을 맡아 동아리를 이끌면서 많은 봉사활동을 하였고, 멘토링 및 튜터링 활동을 통해 학과 후배에게 제가 배운 경험들을 공유하였습니다. 또한 이 경험을 바탕으로 3학년 때 학과에 프로젝트 학회를 창단하여 부회장으로써 학과 발전을 위해 노력하였습니다.',
  paragraphThree: '저를 더 알고 싶으시다면 아래 제 github를 방문해주세요!',
  resume: 'https://github.com/seonghunYang', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'blockchain_project.jpg',
    title: '블록체인 기반 재능거래 플랫폼',
    info:
      '블록체인 기반 재능거래 플랫폼은 기존 재능거래 플랫폼이 가지고 있는 단점인 비싼 수수료를 보완하기 위해서 이더리움 기반 dapp으로 개발한 재능거래 플랫폼이다.',
    info2:
      '나는 백엔드와 이더리움과 웹 프론트엔드의 연결을 담당하여 개발하였다. 이 과정에서 express.js를 사용하여 백엔드를 개발하였고, Web3.js를 통해 웹 프론트엔드와 이더리움 스마트컨트렉트를 연결하였다.',
    url: 'https://guarded-castle-05363.herokuapp.com/',
    repo: 'https://github.com/seonghunYang/uxm_BlockChain_platform', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stockWeb_project.jpg',
    title: '실시간 주식정보 웹사이트',
    info:
      '최근 주변에 젋은 친구들도 주식에 관심을 많이 가지는 것을 보고 나 역시 관심을 가지고 주식 정보 사이트 몇몇을 봤지만 내가 원하는 기능이 없는 곳도 많고 기능이 통합되어 있는 곳이 없어서 직접 주식 정보를 확인할 수 있는 사이트를 개발하였다.',
    info2:
      'javascript 프레임워크인 React JS를 사용하여 개발하였고, 그 외에도 다양한 서드파티 라이브러리를 사용하여 개발하였다. 또한 Responsive design을 유지하기 위해 노력하였다.',
    url: 'https://gifted-mclean-a7a1a6.netlify.app/',
    repo: 'https://github.com/seonghunYang/Stock-Market_Live', // if no repo, the button will not show up
    youtube: 'https://www.youtube.com/watch?v=ncYRjIVIC3I',
  },
  {
    id: nanoid(),
    img: 'maskmap_project.jpg',
    title: '공공마스크 맵 웹사이트',
    info:
      '코로나 유행 당시 공공마스크 정보를 확인할 수 있는 웹 사이트를 개발하였다. 갑작스러운 재난 상황으로 정보 전달이 제대로 되지 않고 또 정보를 구하는 것이 쉽지 않았기 때문에 공공마스크에 대한 정보를 쉽고 편하게 제공할 수 있도록 노력하였다. ',
    info2:
      'React JS를 사용하여 개발하였고 지도는 Naver Map api를 사용하였다. 공공마스크 정보는 당시 정부에서 제공하는 api를 사용하였지만, 현제 공공마스크 제도가 종료되어 서비스가 종료되었다.',
    url: '',
    repo: 'https://github.com/seonghunYang/MaskMap-js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stockapp_project.jpg',
    title: '실시간 주식정보 앱',
    info:
      '실시간 주식정보 웹사이트의 앱버전으로, React Native JS를 사용하여 Cross-platform app으로 개발하였다. 최대한 유사사이트의 UI를 참고하여 개발하였다. ',
    info2: '',
    url: '',
    repo: 'https://github.com/seonghunYang/stock-market-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trip_project.jpg',
    title: '자유여행 가이드 투어 서비스',
    info:
      '평소 여행가는 것을 좋아하여 여행 상품등을 구매할 수 있는 사이트를 종종 사용했지만, 좀더 판매자와 구매자가 가깝고 자유룝게 상품을 거래할 수 있는 플랫폼이 있다면 좋겠다고 생각하여 개발하였다.',
    info2:
      'Bootstrap4를 사용하여 프론트엔드를 개발하였고, express.js를 통해 백엔드를 개발하였다. 구글 Map api, WYSIWYG 에디터, PassportJS 등 웹과 관련한 다양한 시스템을 경험하였다.',
    url: 'https://agile-escarpment-42602.herokuapp.com/',
    repo: 'https://github.com/seonghunYang/web_project_trip', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '아래 이메일을 통해 연락부탁드립니다.',
  btn: 'didtjdgns852@mju.ac.kr',
  email: 'didtjdgns852@mju.ac.kr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/seonghunYang',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
