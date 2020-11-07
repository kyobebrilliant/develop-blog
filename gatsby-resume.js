// interface GatsbyResume {
//   name: string
//   email: string
//   github?: string
//   twitter?: string
//   facebook?: string
//   education: Education[]
//   language: Spec[],
//   experience: Experience[]
// }
//
// interface Experience {
//   started: string
//   ended?: string
//
// }
//
// interface Education {
//   started: string
//   ended?: string
//   name: string
//   degree: string
//   details: string[]
// }
//
// interface Spec {
//   name: string
//   time: string
// }

const education = [
  {
    started: "2002-03",
    ended: "2010-02",
    degree: "Bachelor's degree in Mathematics",
    name: "Seoul National University",
    details: ["."],
  },
]

const educationKo = [
  {
    started: "2002-03",
    ended: "2010-02",
    degree: "자연과학대학 수리과학부 졸업",
    name: "서울대학교",
    details: ["."],
  },
]

const languageSpec = [
  {
    name: "java",
    time: "2014~",
  },
  {
    name: "php",
    time: "2014~2015",
  },
  {
    name: "javascript",
    time: "2014~",
  },
  {
    name: "kotlin",
    time: "2018~",
  },
  {
    name: "git",
    time: "2014",
  },
  {
    name: "docker",
    time: "2016",
  },
  {
    name: "react",
    time: "2016",
  },
  {
    name: "aws",
    time: "2016",
  },
  {
    name: "terraform",
    time: "2020",
  },
  {
    name: "spring",
    time: "2014",
  },
]

const resume = {
  en: {
    name: "Suk Kyo, Suh",
    email: "sukkyo.suh@gmail.com",
    dob: "09/13/1983",
    github: "kyobeBrilliant",
    education: education,
    language: languageSpec,
    experience: [
      {
        started: "2015-11",
        ended: "2015-11",
        company_name: "htbeyond",
        company_description: "apartment iot platform company",
        position_title: "fullstack, logistic platform developer",
        achievement: [
          "developed stock synchronize module between warehouse and headquarter",
          "developed w/ stored procedure, java, php for backend",
          "management ui with jquery, angular",
        ],
      },
      {
        started: "2014-03",
        ended: "2015-10",
        company_name: "Tmon",
        company_description: "online merchandise company",
        position_title: "fullstack, logistic platform developer",
        achievement: [
          "developed stock synchronize module between warehouse and headquarter",
          "developed w/ stored procedure, java, php for backend",
          "management ui with jquery, angular",
        ],
      },
    ],
  },
  ko: {
    name: "서석교",
    dob: "1983년 9월 13일",
    email: "sukkyo.suh@gmail.com",
    github: "kyobeBrilliant",
    education: educationKo,
    language: languageSpec,
    experience: [
      {
        started: "2014-03",
        ended: "2015-11",
        company_name: "티몬",
        company_description: "소셜 커머스",
        position_title: "물류 플랫폼 개발자",
        achievement: ["재고 동기화 시스템 개발"],
      },
    ],
  },
}

module.exports = resume
