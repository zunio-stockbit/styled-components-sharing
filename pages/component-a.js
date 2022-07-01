import styled, { keyframes } from 'styled-components';

const WhiteSpace = styled.div`
  display: block;
  height: 21px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-color: #eee;
  background: ${props => props.variant === 'primary' ? '#00ab6b' : 'transparent'};
  overflow: visible;

  &:active {
    color: white;
  }

  ${Title} {
    color: ${props => props.color || 'green'};
  }

  .custom-text {
    color: purple;
  }
`;

const CustomButton = styled(Button)`
  background: ${props => props.backgroundColor};
`;

const Card = styled.div.attrs(props => ({
  // Set default props
  padding: props.padding || "1em",
  margin: props.padding || "1em",
}))`
  font-size: 1em;
  border: 1px solid #DDD;
  border-radius: 4px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

const rotateKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotateAnimation = styled.div`
  display: inline-block;
  animation: ${rotateKeyframes} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default function ComponentA() {
  return (
    <div>
      <Title>Text Biasa</Title>
      <Button variant="primary">Login</Button>
      <Button as="a" href="https://ui.lab.bibit.id/staging/">Bibit Main App</Button>
      <CustomButton backgroundColor='red'>Custom Button</CustomButton>
      <WhiteSpace />
      <div>
        <Button>
          <Title>Test</Title>
        </Button>
        <Button color="red">
          <Title>Test</Title>
        </Button>
        <Button color="red">
          <Title>Test</Title>
          <p className='custom-text'>Custom Text</p>
        </Button>
      </div>
      <WhiteSpace />
      <div>
        <Card>Default Card</Card>
        <Card margin="24px" padding="24px">Default Card</Card>
      </div>
      <WhiteSpace />
      <RotateAnimation>&lt; 💅🏾 &gt;</RotateAnimation>
    </div>
  )
}
