import TextFieldDemo from "./textfield"
import SwitchDemo from "./switch"

const Contact = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact</h2>

      <p>Fill the form below to contact us:</p>

      <TextFieldDemo />
      <br /><br />

      <SwitchDemo />
    </div>
  )
}

export default Contact
