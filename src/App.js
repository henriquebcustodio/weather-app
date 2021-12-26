import Mobile from "./layouts/Mobile";
import { ThemeProvider } from "styled-components";
import colorScheme from "./colors/color-scheme";
import CityProvider from "./context/CityProvider";
import WeatherProvider from "./context/WeatherProvider";

const App = () => {
    return (
        <CityProvider>
            <WeatherProvider>
                <ThemeProvider theme={colorScheme}>
                    <Mobile />
                </ThemeProvider>
            </WeatherProvider>
        </CityProvider>
    );
};

export default App;

