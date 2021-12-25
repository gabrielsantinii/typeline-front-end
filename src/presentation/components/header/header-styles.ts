import styled from "styled-components";
import { Typescript } from "@styled-icons/simple-icons";

export const Container = styled.div`
  width: 100%;
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  height: 70px;
  z-index: 999;

  background: ${({ theme }) => theme.colors.hoverPrimaryText};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoIcon = styled(Typescript)`
  width: 28px;
  height: 28px;
  fill: ${({ theme }) => theme.colors.highlight};
`;

export const Logo = styled.h2`
  margin-left: 10px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.highlight};
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: ${({ theme }) => theme.colors.secondaryText};
    margin-right: 10px;
  }
`;
