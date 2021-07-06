import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyled } from './styles/Global';

import AppContainer from './components/AppContainer';

import Home from './pages/Home/';
import Projects from './pages/Projects';

import { useTheme } from './hooks/useTheme';

function App() {

  const { theme } = useTheme();

  return (
    <BrowserRouter forceRefresh={true} >
      <AppContainer theme={theme}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </AppContainer>
      <GlobalStyled theme={theme} />
    </BrowserRouter>
  );
}

export default App;
