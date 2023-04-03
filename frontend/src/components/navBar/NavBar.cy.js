import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../contexts/AuthContext";

describe("NavBar", () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <AuthContextProvider>
          <NavBar />
        </AuthContextProvider>
      </BrowserRouter>
    );
  });

  it("displays Properties and About buttons", () => {
    cy.get("div").contains("Properties").should("exist");
    cy.get("div").contains("About").should("exist");
  });
});
