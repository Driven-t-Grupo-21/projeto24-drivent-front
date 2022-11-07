import { useState } from 'react';
import CertificatePage from '../../../components/Certificate';

export default function Certificate() {
  const [progress, setProgress] = useState(1);
  switch (progress) {
  case 1:
    return <CertificatePage setProgress={setProgress} />;
  default:
    return <>default</>;
  }
}
