import Home from "./(home)/Home";
import Wrapper from "./layout/wrapper";

export const metadata = {
  title: "Japan Whells",
  description: `Shop Japanese used cars at Japan Wheels - We Deliver Dreams `,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
