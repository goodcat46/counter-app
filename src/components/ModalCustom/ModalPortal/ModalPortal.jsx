import ReactDOM from 'react-dom';

const ModalPortal = props => {
  const modalRef = document.getElementById(props.portal);
  if (!props.portal) {
    return null;
  }
  return ReactDOM.createPortal(props.children, modalRef);
};

export default ModalPortal;
