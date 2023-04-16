import React from "react";
import styled from "styled-components";

const Container = styled.fieldset`
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  outline: ${(props) => props.outline};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${props=>props.borderRadius};
  ${props=>props.styleProps};
  legend {
    position: relative;
    font-size: ${props=>props.legendSize};
    padding: ${props=>props.legendPadding};
    margin : ${props=>props.legendMargin};
  }
`;

const FieldSet = ({
  children,
  background,
  border,
  outline,
  padding,
  margin,
  borderRadius,
  legendtext,
  styleProps,
  legendSize,
  legendPadding,
  legendMargin,
  ...rest
}) => {
  return (
    <Container
      background={background}
      border={border}
      outline={outline}
      padding={padding}
      margin={margin}
      legendSize={legendSize}
      borderRadius={borderRadius}
      legendPadding={legendPadding}
      legendMargin={legendMargin}
      {...styleProps}
    >
      <legend>{legendtext}</legend>
      {children}
    </Container>
  );
};

FieldSet.defaultProps = {
  background: "transparent",
  border: "1px solid var(--primary-black)",
  outline: "none",
  borderRadius : "2px",
  legendtext: "",
  padding: "10px",
  legendSize: "12px",
  legendPadding : "5px",
  legendMargin : "0px",
  styleProps: {},
};
export default FieldSet;
