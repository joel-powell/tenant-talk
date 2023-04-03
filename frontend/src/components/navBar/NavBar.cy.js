import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../contexts/AuthContext";

describe("LoginForm", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <AuthContextProvider>
          <NavBar />
        </AuthContextProvider>
      </BrowserRouter>
    );
  });
});
