import React from "react";
import { Card, Container } from "@mui/material";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Card style={{ backgroundColor: "#f5f7fd", height: "100vh" }}>
        {children}
      </Card>
    </Container>
  );
};
