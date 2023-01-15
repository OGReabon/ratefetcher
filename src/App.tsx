import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Select, RatesTable } from "./components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";
import GlobalStyle from "./styled-components/globalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <header className="App-header">
            <Select options={["1", "2", "3"]} />
            <p>Edit and save to reload.</p>
            {/* <RatesTable /> */}
          </header>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
