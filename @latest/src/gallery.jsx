import LightGallery from 'lightgallery/react';


import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="1.jpg">
                    <img alt="img1" src="1.jpg" />
                </a>
                <a href="2.jpg">
                    <img alt="img2" src="2.jpg" />
                </a>
                ...
            </LightGallery>
        </div>
    );
}