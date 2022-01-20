import Mobile from "./layouts/Mobile";
import Desktop from "./layouts/Desktop";
import { ThemeProvider } from "styled-components";
import colorScheme from "./colors/color-scheme";
import CityProvider from "./context/CityProvider";
import WeatherProvider from "./context/WeatherProvider";
import UnitsProvider from "./context/UnitsProvider";
import useWindowWide from "./hooks/useWindowWide";

const App = () => {
    const isDesktop = useWindowWide(800);

    return (
        <UnitsProvider>
            <CityProvider>
                <WeatherProvider>
                    <ThemeProvider theme={colorScheme}>
                        {!isDesktop &&
                            <Mobile />
                        }
                        {isDesktop &&
                            <Desktop />
                        }
                    </ThemeProvider>
                </WeatherProvider>
            </CityProvider>
        </UnitsProvider>
    );
};

export default App;

