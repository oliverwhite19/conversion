import { FunctionalComponent, h } from 'preact';
import ConversionHandler from './conversion/ConversionHandler';
import Header from './header';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Header />
            <div style={{ paddingTop: '5rem' }}>
                <ConversionHandler />
            </div>
        </div>
    );
};

export default App;
