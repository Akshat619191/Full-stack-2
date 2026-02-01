import RatingDemo from "./rating"
import TextFieldDemo from "./textfield"

const About = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>About</h2>

      <p>
        This page explains the purpose of the project and demonstrates
        reuse of Material UI components across different routes.
      </p>

      <h4>Give Project Feedback</h4>
      <TextFieldDemo />
      <br /><br />

      <RatingDemo />
    </div>
  )
}

export default About
