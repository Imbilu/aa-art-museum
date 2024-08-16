import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
    return (
        <div className="page-wrapper">
            <GalleryNavigation galleries={harvardArt.records} />
            <Switch>
                <Route path="/galleries/:galleryId">
                    <GalleryView galleries={harvardArt.records} />
                </Route>
                <Route exact path="/">
                    <h2>Harvard Art Museum</h2>
                    <p>
                        Look, but don't touch. Please select a gallery in the
                        navigation bar
                    </p>
                </Route>
                <Route>
                    <p>Page Not Found</p>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
