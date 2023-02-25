import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
