import { QueryLang } from './rx/ql';
import { RxLang } from './rx/rl';

export type TQueryLangHandler = (...arg: Array<any>) => any;
export type TQueryLang = Array<TPath | TQueryLangHandler | QueryLang>;
export type TRxLangHandler = (...args: Array<any>) => void;
export type TRxLang = Array<TPath | TRxLangHandler>;
export type TPath = Array<string | number> | string;

export interface IReactive {
  dev?: boolean;
  data?: Object;
  getter?: {
    [name: string]: QueryLang;
  };
  effect?: Array<RxLang>;
}

export namespace mpapp {
  export interface IAppLaunchParam {
    query: Object;
    path: string;
  }

  export interface IAppProps {
    onLaunch?: (options: IAppLaunchParam) => void;
    onShow?: (options: IAppLaunchParam) => void;
    onLoad?: () => void;
    onHide?: () => void;
    onError?: (msg: string) => void;
    globalData?: any;
    [key: string]: any;
  }

  export interface IPageProps {
    data?: Object | Function;
    onTitleClick?: () => void;
    onPageScroll?: (scroll: { scrollTop: number }) => void;
    onLoad?: (query: Object) => void;
    onReady?: () => void;
    onShow?: () => void;
    onHide?: () => void;
    onUnload?: () => void;
    onPullDownRefresh?: () => void;
    onReachBottom?: () => void;
    onShareAppMessage?: () => void;
    setData?: (path: Object | string, val: any) => void;
    $spliceData?: (
      start: number,
      deleteCount: number,
      ...items: Array<any>
    ) => void;
    getCurrentPages?: () => Array<string>;
    [key: string]: any;
  }

  export interface IMixin {
    data?: any;
    props?: any;
    didUpdate?: (prevProps: any, prevData: any) => void;
    didMount?: () => void;
    didUnmount?: () => void;
    methods?: { [key: string]: Function };
  }

  export interface IComponentProps<P = any, S = any> {
    mixins?: Array<IMixin>;
    data?: S;
    props?: P;
    didUpdate?: (prevProps: P, prevData: S) => void;
    didMount?: () => void;
    didUnmount?: () => void;
    methods?: { [key: string]: (param: any) => void };
    is?: string;
    $page?: Object;
    $id?: number;
  }
}
