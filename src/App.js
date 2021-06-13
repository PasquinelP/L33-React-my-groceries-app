import Container from './Container';
import { AppProvider } from './components/AppContext';

function App() {
  return (
    <>
      <AppProvider>
        <Container />
      </AppProvider>
    </>
  );
}

export default App;
