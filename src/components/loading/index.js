import React from 'react';
import style from './loading.module.scss';
const Loading = ({ loaderClass }) => {
  return (
    <>
      <div className={`${style.loader} ${loaderClass}`}></div>
    </>
  );
};
export default Loading;
