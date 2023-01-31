import ReactDOM from 'react-dom';

const Portal = ({ children = null, id = null }) => {
  console.log({ id });
  if (!id) return null;
  const modalRef = document.getElementById(`${id}`);
  return ReactDOM.createPortal(children, modalRef);
};

export default Portal;
