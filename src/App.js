import Mobile from "./layouts/Mobile";
import { ThemeProvider } from "styled-components";
import colorScheme from "./colors/color-scheme";
import CityProvider from "./context/CityProvider";

const App = () => {
    return (
        <CityProvider>
            <ThemeProvider theme={colorScheme}>
                <Mobile />
            </ThemeProvider>
        </CityProvider>
    );
};

export default App;

