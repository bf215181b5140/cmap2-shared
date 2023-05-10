import { ContentBoxWidth, ReactProps } from '../index';
interface ContentProps extends ReactProps {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}
export declare function Content(props: ContentProps): import("react/jsx-runtime").JSX.Element;
interface ContentBoxProps extends ReactProps {
    title?: string;
    flexGrow?: number | string;
    flexBasis?: string | ContentBoxWidth;
    loading?: boolean;
}
export declare function ContentBox(props: ContentBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
