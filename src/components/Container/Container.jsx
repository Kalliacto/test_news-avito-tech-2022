import cn from 'classnames';
import React from 'react';
import s from './Container.module.scss';

const Container = ({ className, children }) => {
    return <div className={cn(s.container, className)}>{children}</div>;
};

export default Container;
