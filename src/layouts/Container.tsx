import {ReactNode} from 'react';

type ContainerProps = {
    children: ReactNode;
    maxWidth?:string;
}

export default function Container({children, maxWidth="max-w-screen-xl"}:ContainerProps) {
    return(
    <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>{children}</div>)
}