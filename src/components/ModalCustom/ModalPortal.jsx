import ReactDOM from 'react-dom';

const ModalPortal = props => {
  if (!props.portal) return null;

  const modalRef = document.getElementById(props.portal);

  if (modalRef) return ReactDOM.createPortal(props.children, modalRef);
};

export default ModalPortal;
