import styled from "styled-components";

interface IContainerProps {
  marked: boolean;
  blocked: boolean;
  user?: string;
}
export const Container = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 47px;
  background: linear-gradient(
    145deg,
    ${(props: IContainerProps) => {
      if (props.marked) {
        return props.user === "x" ? "#06c" : "#c00";
      }
      return "#cacaca";
    }},
    ${(props: IContainerProps) => {
        if (props.marked) {
          return props.user === "x" ? "#0bf" : "#f90";
        }
        return "#f0f0f0";
      }}
      /* #f0f0f0 */
  );
  box-shadow: 15px 15px 37px #bababa, -15px -15px 37px #ffffff;
  cursor: ${(props: IContainerProps) =>
    props.marked || props.blocked ? "auto" : "pointer"};
  p {
    font-size: 3rem;
    margin-top: -5px;
    color: #090909;
  }
`;
