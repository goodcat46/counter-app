import ReactDOM from 'react-dom';

const Portal = ({ children = null, id = null }) => {
  if (!id) return null;

  const modalRef = document.getElementById([id]);

  return ReactDOM.createPortal(children, modalRef);
};

export default Portal;
