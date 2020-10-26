import React from "react";
import { useRouter } from "next/router";

const test = () => {
  const router = useRouter();
  console.log(router);
  return <div>Router query: {router.query.search}</div>;
};
export default test;
