import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'common/@mui';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ThemeProvider } from '@material-ui/styles';
import Layout from 'Layout';
import { RenderRoutes } from 'Routes';
import { StoreContextProvider } from 'Store/StoreContext';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StoreContextProvider>
                <Router>
                    <Layout>
                        <RenderRoutes />
                    </Layout>
                </Router>
            </StoreContextProvider>
        </ThemeProvider>
    );
}

export default App;
