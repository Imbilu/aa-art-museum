import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ArtImageTile({ art, galleryId, artId }) {
    // console.log(art);
    const firstImage = art[0];
    console.log(artId);

    return (
        <Link to={`/galleries/${galleryId}/${artId}`}>
            <img src={`${firstImage.baseimageurl}`} alt="111" />
        </Link>
    );
}

export default ArtImageTile;
