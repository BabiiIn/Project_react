import { useScrollProgress } from './useScrollProgress';
import { ProgressBar } from './progressBar';

export const ScrollProgressContainer = () => {
  const progress = useScrollProgress();
  return <ProgressBar progress={progress} />;
};
