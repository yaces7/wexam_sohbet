import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import AuthLayout from "@/components/layouts/auth-layout";
import FormSignUp from "@/components/form-sign-up";
import Head from "next/head";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Wexam Online Sohbet</title>
      </Head>
      <FormSignUp />
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Page;
