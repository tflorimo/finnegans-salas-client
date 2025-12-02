import { Overlay, Spinner } from "./styles";
import type { FullScreenLoaderProps } from "./types";

export const FullScreenLoader = ({ isLoading }: FullScreenLoaderProps) => {
  if (!isLoading) return null;

  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};