import { InfoContainer, Wrapper, Title, PathContainer, Text } from "./style";

export default function BannerTitleInfo({ title, pathName }) {
  return (
    <Wrapper>
      <InfoContainer>
        <Title>{title}</Title>
        <PathContainer>
          <Text color="#fea116">Home</Text>
          <Text>/</Text>
          <Text color="#fea116">PAGES</Text>
          <Text>/</Text>
          <Text>{pathName}</Text>
        </PathContainer>
      </InfoContainer>
    </Wrapper>
  );
}
