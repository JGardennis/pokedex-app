import React from "react";
import { Link, Button } from "../../UI";
import { PageWrapper, PageTitle } from "./Page.styles";

interface iProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  backButton?: boolean;
}

const Page = (props: iProps) => (
  <PageWrapper className={props.className}>
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
