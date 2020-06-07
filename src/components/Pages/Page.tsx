import React from "react";
import { Link, Button } from "../Buttons";
import { PageWrapper, PageTitle } from "./Page.styles";

interface iProps {
  children: React.ReactNode;
  title?: string;
  backButton?: boolean;
  landingPage?: boolean;
  wide?: boolean;
}

const Page = (props: iProps) => (
  <PageWrapper landingPage={props.landingPage} wide={props.wide}>
    {props.title && <PageTitle>{props.title}</PageTitle>}
    {props.backButton && (
      <Link to="/">
        <Button>Back</Button>
      </Link>
    )}
    {props.children}
  </PageWrapper>
);

export default Page;
