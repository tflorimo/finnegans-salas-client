import { Overlay, Spinner } from "./styles";

interface FullScreenLoaderProps {
  isLoading: boolean;
}

export const FullScreenLoader = ({ isLoading }: FullScreenLoaderProps) => {
  if (!isLoading) return null;

  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};