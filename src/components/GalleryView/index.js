import { useParams, Route } from 'react-router-dom/cjs/react-router-dom.min';
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';

function GalleryView({ galleries }) {
    const { galleryId } = useParams();

    const galleryChoice = galleries.find(
        (gallery) => gallery.galleryid === Number(galleryId)
    );

    return (
        <div>
            <h1>Hello From GalleryView</h1>
            <h2>{galleryChoice.name}</h2>
            <Route exact path={`/galleries/${galleryId}`}>
                {galleryChoice.objects.map((object) => (
                    <ArtImageTile
                        key={object.id}
                        artId={object.id}
                        galleryId={galleryId}
                        art={object.images}
                    />
                ))}
            </Route>
            <Route path="/galleries/:galleryId/art/:artId">
                <ArtDescription
                    // key={galleryChoice.id}
                    gallery={galleryChoice}
                />
            </Route>
        </div>
    );
}

export default GalleryView;
