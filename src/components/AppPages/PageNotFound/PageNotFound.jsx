import scss from './PageNotFound.module.scss';

const PageNotFound = ({ children }) => {
  return (
    <>
      <div className={scss.PageNotFound}>
        <span>Page Not Found</span>
      </div>
      {children}
    </>
  );
};

export default PageNotFound;
