import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../redux/store';
import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const theme = {
	buttonColor: '#9785f2',
	buttonHoverColor: '#7467b5',
	inputColor: '#d9f0ff',
	inputFocusedColor: '#a3d5ff',
	textSecondaryColor: '#8c8c8c'
};

interface IMyAppProps extends AppProps {
	store: any;
}
const MyApp = ({ Component, pageProps, store }: IMyAppProps) => {
	return (
		<Provider store={store}>
			<Head>
				<title>thePost</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
};

MyApp.getInitialProps = async appContext => {
	const pageProps = await App.getInitialProps(appContext);
	return { ...pageProps };
};

export default withRedux(createStore)(withReduxSaga(MyApp));
