import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const FooterPortal = ({ children }) => {
  const footerRef = useRef(document.getElementById('footer'));

  useEffect(() => {
    if (children) {
      footerRef.current = document.getElementById('footer');
    }
  }, [children]);

  return footerRef.current ? ReactDOM.createPortal(children, footerRef.current) : null;
};

export default FooterPortal;
