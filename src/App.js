import Mobile from "./layouts/Mobile";
import Desktop from "./layouts/Desktop";
import { ThemeProvider } from "styled-components";
import colorScheme from "./colors/color-scheme";
import CityProvider from "./context/CityProvider";
import WeatherProvider from "./context/WeatherProvider";
import UnitsProvider from "./context/UnitsProvider";
import MediaQuery from 'react-responsive';

const App = () => {
    return (
        <UnitsProvider>
            <CityProvider>
                <WeatherProvider>
                    <ThemeProvider theme={colorScheme}>
                        <MediaQuery maxWidth={800}>
                            <Mobile />
                        </MediaQuery>
                        <MediaQuery minWidth={800}>
                            <Desktop />
                        </MediaQuery>
                    </ThemeProvider>
                </WeatherProvider>
            </CityProvider>
        </UnitsProvider>
    );
};

export default App;

