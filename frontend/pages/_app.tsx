import { AppProps } from "next/app";
import store from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const theme = createMuiTheme({
    typography: {
      allVariants: {
        fontFamily: "Montserrat, sans-serif",
        textTransform: "none",
        fontWeight: "400",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
