import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
    return (
        <nav>
            <NavLink exact to="/">
                Home
            </NavLink>
            {galleries.map((gallery) => {
                return (
                    <NavLink
                        key={gallery.gallerynumber}
                        to={`/galleries/${gallery.id}`}
                    >
                        {gallery.name}
                    </NavLink>
                );
            })}
            <h1>Galleries</h1>
        </nav>
    );
}

export default GalleryNavigation;
