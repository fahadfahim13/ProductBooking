import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export interface SectionProps {
  padding?: string;
  margin?: string;
  inverse?: boolean;
  position?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  smPadding?: string;
}

export interface ButtonProps {
  color?: string;
  background?: string;
  borderColor?: string;
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #fff;
  white-space: nowrap;
  padding: 2% 2%;
  color: #161d25;
  outline: none;
  border: 2px solid #161d25;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 3%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  &:hover {
    color: #fff;
    background: #5c6ac4;
    border: 2px solid #5c6ac4;
  }
`;

export const SimpleButton = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${(props) => (props.background ? props.background : '#fff')};
  white-space: nowrap;
  padding: 2% 2%;
  color: ${(props) => (props.color ? props.color : '#161D25')};
  outline: none;
  border: ${(props) =>
    props.borderColor ? `2px solid ${props.borderColor}` : '2px solid #161d25'};
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 44px;
  margin-top: 0%;
  margin-bottom: 0%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Row = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 5%;
`;

export const Col = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const Section = styled.section<SectionProps>`
  padding: ${(props) => (props.padding ? props.padding : '10px 0')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  background: ${(props) => (props.inverse ? 'white' : '#071c2f')};
  position: ${(props) => (props.position ? props.position : '')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'auto')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : 'auto')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : 'auto')};

  @media screen and (max-width: 768px) {
    padding: ${(props) => (props.smPadding ? props.smPadding : '70px 0')};
  }
`;

export default GlobalStyle;
