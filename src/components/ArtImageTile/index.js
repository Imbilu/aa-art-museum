import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ArtImageTile({ art, galleryId, artId }) {
    // console.log(art);
    const firstImage = art[0];

    return (
        <Link to={`/galleries/${galleryId}/art/${artId}`}>
            <img src={`${firstImage.baseimageurl}`} alt="111" />
        </Link>
    );
}

export default ArtImageTile;
