import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function GalleryView({ galleries }) {
    const { galleryId } = useParams();

    const galleryChoice = galleries.find(
        (gallery) => gallery.galleryid === Number(galleryId)
    );

    return (
        <div>
            <h1>Hello From GalleryView</h1>
            <h2>{galleryChoice.name}</h2>
        </div>
    );
}

export default GalleryView;
