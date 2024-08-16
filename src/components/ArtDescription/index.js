import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ArtDescription({ gallery }) {
    const galleryId = gallery.id;
    const { artId } = useParams();
    const artwork = gallery.objects.find((work) => work.id === Number(artId));
    const images = artwork.images;

    return (
        <div>
            <Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
            <Link to={artwork.primaryimageurl}>{artwork.medium}</Link>
            {images.map((image) => {
                return (
                    <img
                        key={image.imageid}
                        src={`${image.baseimageurl}`}
                        alt=""
                    />
                );
            })}
            <p>Description: {artwork.description}</p>
            <p>Technique:{artwork.technique}</p>
        </div>
    );
}

export default ArtDescription;
