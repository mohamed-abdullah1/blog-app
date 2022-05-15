import { useState } from "react";
import {
  Container,
  FormContainer,
  InputField,
  Wrapper,
} from "./styles/NewsLetter.styled";

const NewsLetter = () => {
  const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your Email ${email}`);
    setEmail("");
  };
  return (
    <Wrapper>
      <Container>
        <h1>Subscribe to newsletter</h1>
        <FormContainer onSubmit={handleSubmit}>
          <InputField
            placeholder="Enter your email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>SUBSCRIBE</button>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default NewsLetter;
