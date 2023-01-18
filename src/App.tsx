import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ConversionTable, RatesTable } from "./components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";
import GlobalStyle from "./styled-components/globalStyles";
import { ContentContainer } from "./styled-components/styleComponents";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContentContainer>
          <ConversionTable />
          <RatesTable />
        </ContentContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
