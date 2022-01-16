import Mobile from "./layouts/Mobile";
import { ThemeProvider } from "styled-components";
import colorScheme from "./colors/color-scheme";
import CityProvider from "./context/CityProvider";
import WeatherProvider from "./context/WeatherProvider";
import UnitsProvider from "./context/UnitsProvider";

const App = () => {
    return (
        <UnitsProvider>
            <CityProvider>
                <WeatherProvider>
                    <ThemeProvider theme={colorScheme}>
                        <Mobile />
                    </ThemeProvider>
                </WeatherProvider>
            </CityProvider>
        </UnitsProvider>
    );
};

export default App;

