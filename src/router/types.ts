import type { ReactNode } from "react";

export type PrivateRouteProps = {
  children: ReactNode;
};

export type PublicRouteProps = PrivateRouteProps;

export type AdminRouteProps = {
  children: React.ReactNode;
}
