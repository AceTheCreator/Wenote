import React from "react";
import { Form, FormInput, SearchWrapper } from "./search.style";
import { BiSearch } from "react-icons/bi";

export default function search() {
  return (
    <SearchWrapper>
      <Form>
        <BiSearch fontSize="20px" color="#161616" />
        <FormInput placeholder="search notes" />
      </Form>
    </SearchWrapper>
  );
}
