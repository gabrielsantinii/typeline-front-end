import { Avatar } from "@/src/presentation/components";
import {
  Container,
  Content,
  LogoContainer,
  Logo,
  OptionsContainer,
  UserInfos,
  LogoIcon
} from "./header-styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon />
          <Logo>Typeline</Logo>
        </LogoContainer>

        <OptionsContainer>
          <UserInfos>
            <span>Gabriel Santini</span>
            <Avatar />
          </UserInfos>
        </OptionsContainer>
      </Content>
    </Container>
  );
}
