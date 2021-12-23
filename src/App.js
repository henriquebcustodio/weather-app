import Mobile from "./layouts/Mobile";
import { ThemeProvider } from "styled-components";
import colorScheme from "./colors/color-scheme";

const App = () => {
    return (
        <ThemeProvider theme={colorScheme}>
            <Mobile />
        </ThemeProvider>
    );
};

export default App;

