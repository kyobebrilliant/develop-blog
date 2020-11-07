import { graphql } from "gatsby"

export const pageQuery = graphql`
  fragment Resume on Resume {
    name
    dob
    email
    github
    education {
      started
      ended
      degree
      name
      details
    }
    language {
      name
      time
    }
    experience {
      started
      ended
      position_title
      company_name
      company_description
      achievement
    }
  }
`
