import { ReactNode } from "react";

export const metaData = {
  title: {
    absolute: "Register -next js",
  },
};

export default async function RegisterTemplate({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
