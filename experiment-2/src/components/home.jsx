import ButtonDemo from "./Button"
import RatingDemo from "./rating"
import SelectDemo from "./select"
import SwitchDemo from "./switch"
import TextFieldDemo from "./textfield"

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Home</h2>

      <ButtonDemo />
      <br /><br />

      <RatingDemo />
      <br /><br />

      <SelectDemo />
      <br /><br />

      <SwitchDemo />
      <br /><br />

      <TextFieldDemo />
    </div>
  )
}

export default Home
