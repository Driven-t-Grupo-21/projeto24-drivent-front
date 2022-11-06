import { useState } from 'react';
import ActivityPage from '../../../components/Activities';

export default function Activities() {
  const [progress, setProgress] = useState(1);
  switch (progress) {
  case 1:
    return <ActivityPage setProgress={setProgress} />;
  default:
    return <>default</>;
  }
}
