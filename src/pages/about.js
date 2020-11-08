import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Image from "gatsby-image"

const About = ({ data, location }) => {
  console.log(location)
  if (location.pathname.includes("/about")) {
    require("nes.css/css/nes.min.css")
    require("./about.css")
  }
  const avatar = data?.avatar.childImageSharp?.fixed
  const [resume, setResume] = useState(data?.site.siteMetadata.resume.en)
  const [resumeType, setResumeType] = useState("ko")
  const [isNesFont, setIsNesFont] = useState(true)
  useEffect(() => {
    setResume(data?.site.siteMetadata.resume[resumeType])
  }, [data, resumeType])
  return (
    <div
      style={{
        background: "linear-gradient(#ccc, #fff)",
        padding: "0.05px",
        zIndex: -2,
      }}
    >
      <div
        className={"letter"}
        style={{
          maxWidth: "768px",
          padding: "0.05px",
          margin: "1rem auto",
          backgroundColor: "white",
        }}
      >
        <div className={isNesFont ? "resume-body" : "resume-body-smooth"}>
          <div style={{position: 'relative', right: '10px'}}>
          <button type={'button'} style={{
            position: 'fixed',
            zIndex: 1000,
            top: '10px',
            right: '50px'
          }} className={'nes-btn is-success'} onClick={
            () => setIsNesFont(prev => !prev)
          }>폰트 변경</button>
          </div>
          <ResumeLanguageSelectBox
            value={resumeType}
            whenSelect={{
              en: () => setResumeType("en"),
              ko: () => setResumeType("ko"),
              adjust: event => setIsNesFont(!event.target.checked),
            }}
          />
          <h1 style={{ paddingLeft: "1em" }}>About</h1>

          <div
            className={"basicInfo"}
            style={{ padding: "1em", display: "flex", alignItems: "center" }}
          >
            {avatar && <Image fixed={avatar} className="bio-avatar" />}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1em",
              }}
            >
              <span className={"nes-text"}>{resume.name}</span>
              <span className={"nes-text"}>{resume.dob}</span>
              <span className={"nes-text"}>{resume.email}</span>
              {resume.github && (
                <Link
                  to={`https://github.com/${resume.github}`}
                  target={"_blank"}
                >
                  <button
                    type={"button"}
                    className={"nes-btn is-primary is-small"}
                  >
                    Github
                  </button>
                </Link>
              )}
            </div>
          </div>

          <div className={"nes-container with-title is-dark"}>
            <p className={"title"}>
              {resumeType === "ko" ? "경력" : "Work Experience"}
            </p>
            {resume.experience.map(exp => (
              <Career data={exp} />
            ))}
          </div>

          <div className="nes-container with-title">
            <p className={"title"}>
              {resumeType === "ko"
                ? "습득 기술 및 언어"
                : "Languages, Frameworks & Tools"}
            </p>

            {resume.language.map(lang => (
              <span className="nes-badge" style={{ margin: "1em" }}>
                <span
                  className={getClassForBadgeFunction(lang.name)}
                  style={{ left: "0px" }}
                >
                  {lang.name}
                </span>
              </span>
            ))}
          </div>

          <div className="nes-container with-title is-dark">
            <p className={"title"}>
              {resumeType === "ko" ? "교육" : "Education"}
            </p>
            {resume.education.map(edu => (
              <Education data={edu} />
            ))}
          </div>
        </div>
        {/*{JSON.stringify(data)}*/}
      </div>
    </div>
  )
}

const Career = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "0.5em",
        marginBottom: "1em",
      }}
    >
      <div className={"nes-text"}>
        <span className={"nes-text is-warning"}>{data.position_title}</span>{" "}
        <Annotation />{" "}
        <span className={"nes-text is-warning"}>{data.company_name}</span>
      </div>
      <div>
        {data.started} ~ {data.ended}
      </div>
      <div
        style={{ border: "1px solid white", padding: "0.05px", width: "100%" }}
      ></div>
      <div className="lists">
        <ul className="nes-list is-disc is-dark">
          {data.achievement.map((element, index) => (
            <div
              key={index}
              style={{ paddingLeft: "0.5rem", paddingTop: "1rem" }}
            >
              <div>
                <span style={{ fontSize: "0.8rem" }}>프로젝트명:</span>{" "}
                {element.projectName}
              </div>
              <div>
                <span style={{ fontSize: "0.8rem" }}>프로젝트기간:</span>{" "}
                {element.period}
              </div>
              <div>
                <span style={{ fontSize: "0.8rem" }}>목적:</span>{" "}
                {element.givenTask}
              </div>
              <div style={{ padding: "1em", fontSize: "0.9rem" }}>
                {element.solution.map((s, index) => (
                  <div key={index}>
                    <span style={{ marginLeft: "-1em" }}>- </span>
                    {`${s}`}
                  </div>
                ))}
              </div>
              <div
                style={{
                  border: "1px solid white",
                  padding: "0.05px",
                  width: "33%",
                  margin: "auto",
                  marginTop: '1rem',
                  marginBottom: '1rem'
                }}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Education = ({ data }) => {
  return (
    <>
      <p>
        {data.name} - {data.degree}
      </p>
      <p>
        {data.started} ~ {data.ended}
      </p>
      <div
        style={{ border: "1px solid white", padding: "0.05px", width: "100%" }}
      ></div>
    </>
  )
}

const language = ["php", "javascript", "java", "kotlin", "go"]
const framework = ["spring", "react", "nextjs"]
const getClassForBadgeFunction = nameOfBadge => {
  if (language.includes(nameOfBadge)) return "is-dark"
  else if (framework.includes(nameOfBadge)) return "is-success"
  else return "is-warning"
}

const ResumeLanguageSelectBox = ({ whenSelect, value }) => {
  return (
    <>
      <div
        className="nes-container with-title is-centered"
        style={{ display: "none" }}
      >
        <p className="title">
          {value === "ko" ? "언어 변경" : "choose language"}
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <label>
            <input
              type="radio"
              className="nes-radio"
              name="answer"
              checked={value === "en"}
              onClick={whenSelect.en}
            />
            <span>en</span>
          </label>

          <label>
            <input
              type="radio"
              className="nes-radio"
              name="answer"
              checked={value === "ko"}
              onClick={whenSelect.ko}
            />
            <span>한글</span>
          </label>

          <label>
            <input
              type="checkbox"
              className="nes-checkbox"
              name="adjust"
              onClick={whenSelect.adjust}
            />
            <span>{value === "ko" ? "폰트 조정" : "adjust font"}</span>
          </label>
        </div>
      </div>
    </>
  )
}

const Annotation = () => <span className={"nes-text is-primary"}>@</span>

export default About

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        resume {
          en {
            ...Resume
          }
          ko {
            ...Resume
          }
        }
      }
    }
  }
`
