import styled from "styled-components";

interface IContainerProps {
  marked: boolean;
  user?: string;
}
export const Container = styled.div`
  height: 10rem;
  width: 10rem;
  ${(props: IContainerProps) => {
    if (props.marked) {
      return `background-color: ${props.user === "x" ? "blue" : "red"};`;
    }
    return "backgroud-color: white;";
  }};
  border-width: 3px;
  border-style: solid;
  border-color: black;
  cursor: ${(props: IContainerProps) => (props.marked ? "auto" : "pointer")};
`;
