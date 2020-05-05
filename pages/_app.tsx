import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../redux/store';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

interface IMyAppProps extends AppProps {
    store: any;
}
const MyApp = ({ Component, pageProps, store }: IMyAppProps) => {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </Provider>
    );
};

MyApp.getInitialProps = async (appContext) => {
    const pageProps = await App.getInitialProps(appContext);
    return { ...pageProps };
};

export default withRedux(createStore)(withReduxSaga(MyApp));
