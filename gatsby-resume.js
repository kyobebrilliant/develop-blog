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
        ended: "present",
        company_name: "htbeyond",
        company_description: "apartment iot platform company",
        position_title: "fullstack developer",
        achievement: [
          // "developed stock synchronize module between warehouse and headquarter",
          // "developed w/ stored procedure, java, php for backend",
          // "management ui with jquery, angular",
        ],
      },
      {
        started: "2014-03",
        ended: "2015-10",
        company_name: "Tmon",
        company_description: "online merchandise company",
        position_title: "fullstack, logistic platform developer",
        achievement: [
          // "developed stock synchronize server module between warehouse" +
          //   "and headquarter using stored procedure, java, php for backend",
          // "maintained management web ui with jquery, angular",
          // "developed logistic statistic report module",
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
        started: "2015-11",
        ended: "current",
        company_description: "",
        company_name: "HT Beyond",
        position_title: "풀스택 개발자",
        achievement: [
          {
            projectName: "커뮤니티 차세대 통합 서비스",
            period: "2020.03 ~ current",
            givenTask:
              "기존 커뮤니티 서비스의 모든 기능을 유연하게 제공할 수 있는 차세대 커뮤니티 서비스 설계 및 개발",
            solution: [
              "activemq를 활용한 event driven msa 도입.",
              "aws gateway+cognito 로 자체 oauth 서버 및 spring security 탈피.",
              "aws, github, jenkins, aws-cli, terraform을 사용해 인프라 구축 자동화 및 blue green deployment 도입",
              "spring scheduler 를 이용해 예약 푸시 메세지 서버 개발",
              "팔로우 기능 및 피드 형식의 게시판 서버 개발",
              "입주민 인증 서버 개발",
              "react, nextjs, typescript를 이용해 게시판, 투표, 설문 관리 화면 개발"
            ],
          },
          {
            projectName: "한남 나인원 커뮤니티 어플리케이션",
            period: "2019.11 ~ 2020.02",
            givenTask: "나인원 특화 커뮤니티 서비스의 백엔드 일부 모듈 개발",
            solution: [
              "spring + kotlin 으로 기존 개발한 아파트 커뮤니티 클라우드 서비스를 나인원 요구사항에 맞게 변경하여 개발",
              "react + typescript로 운영자 웹 어플리케이션 중 일부 화면 개발",
            ],
          },
          {
            projectName: "아너힐스 오토에버 에이전트",
            period: "2019.07 ~ 2019.10",
            givenTask:
              "타사 서비스에 필요한 커뮤니티 서비스 기능의 에이전트 서버",
            solution: [
              "spring webflux + kotlin coroutine을 통해 request, response를 재가공하는 에이전트 서버 개발 ",
            ],
          },
          {
            projectName: "아파트 커뮤니티 클라우드 서비스",
            period: "2018.10 ~ 2019.05",
            givenTask:
              "아파트 단지별로 달라질 수 있는 커뮤니티 서비스를 제공할 수 있는 서비스의 일부 모듈 개발",
            solution: [
              "kotlin + spring + graphql 으로 입주민 권한 관리," +
                " 커뮤니티 기기의 클라우드화, 예약 시스템, 푸시 메세지 모듈 개발",
            ],
          },
          {
            projectName: "홈넷 관리 및 배포 시스템",
            period: "2017, 2018",
            givenTask:
              "아파트 단지 현장 납품 서버의 프로그램 원격 배포 및 관리",
            solution: [
              "현장 server의 docker api 를 제공함과 동시에 jwt 토큰을 체크하는 프록시 서버를 스프링 부트로 개발.",
              "현장 마다 버젼이 달라지는 프로그램을 도커 이미지로 관리하고 이미지를 현장 서버까지 배포하는 msa 클라우드 서비스를 스프링으로 개발.",
              "feign client 를 통해서 http api 통신 구현",
            ],
          },
          {
            projectName: "홈넷 클라우드 oauth 서버",
            period: "2016, 2017, 2018",
            givenTask:
              "회사에서 제공하는 클라우드 서비스의 기능을 사용할 수 있는 토큰 발급 서버",
            solution: [
              "spring security oauth를 통해 jwt 토큰을 발급하는 oauth 서버 개발.",
            ],
          },
          {
            projectName: "ems 리눅스 서버 개발 ",
            period: "2016",
            givenTask:
              "ms-sql 스케쥴러로 이뤄지던 단지 서버의 db 동기화의 기능을 리눅스 환경에 추가",
            solution: [
              "spring boot scheduler 기능을 활용해서 db에 등록된 정보로 custom crontask를 통해 " +
                "DB 간 read-write 실행.",
              "단지별로 다른 쿼리문을 실행할 수 있게 실행문을 " +
                "crud할 수 있는 ui를 angular로 제공. ",
            ],
          },
        ],
      },
      {
        started: "2014-03",
        ended: "2015-10",
        company_name: "티몬",
        company_description: "소셜 커머스",
        position_title: "물류 플랫폼 개발자",
        achievement: [
          {
            projectName: "재고 동기화 시스템",
            period: "2015",
            givenTask:
              "기존에 수동으로 관리가 이뤄지던 " +
              "딜 서버와 물류 창고 전산 서버 사이의 재고 동기화의 자동화",
            solution: [
              "php, rpc, stored procedure를 통해 결제완료나 환불된 딜" +
                "로 물류 창고 전산 서버의 재고를 증감하여 결과값을 통해 딜 가능 수량 재계산",
            ],
          },
          {
            projectName: "어드민 직매입 시스템 고도화",
            period: "2015",
            givenTask: "php로 작성되어 있던 서버를 자바로 전환하면서 화면 분리",
            solution: ["spring-boot, angular, jquery 기술 활용하여 고도화"],
          },
          {
            projectName: "물류 통계 리포트 생성 기능 개발",
            period: "2015",
            givenTask:
              "직매입 성과 보고를 위해 회계팀에서 수작업하던 각종 통계 수치 자동으로 추출",
            solution: [
              "java8의 람다와 고차함수를 사용해 각종수식 반복코딩없이 빠르고 유연하게 개발",
            ],
          },
        ],
      },
    ],
  },
}

module.exports = resume
