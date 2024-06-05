import styled from "styled-components";
export const ButtonStyle = styled.button`
  padding: ${(props) => props.padding || "10px 40px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background: ${(props) => props.background || "#01aa5a"};
  font-weight: ${(props) => props.fontWeight || "600"};
  border: ${(props) => props.border || "none"};
  color: ${(props) => props.color || "#fff"};
  cursor: ${(props) => props.cursor || "pointer"};
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  gap: ${(props) => props.gap || "20px"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "auto"};
  &:hover {
    background: #01aa5ae6;
    color: #fff;
    font-weight: bold;
  }

`;
