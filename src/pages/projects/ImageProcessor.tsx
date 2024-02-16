import { useEffect } from 'react';
import Image_Processor from '../../images/Image_Processor.png';

export default function ImageProcessor() {
    useEffect(() => {
    }, [window.innerWidth]);
    return(
        <div className={window.innerWidth < 600 ? "column":"row"}>
            <img 
                src={Image_Processor} 
                alt="Image Processor" 
                style={{ width: window.innerWidth < 600 ? 400:592, height: window.innerWidth < 600 ? 390: 550 }}
            />
            <p>
                The Image Processor is a Java Application that implements Java's Swing library. It allows the user to upload an image and apply various filters to the image such as blur, sharpen, intensity, and mosaic.
                When an image is uploaded the application also displays a histogram of the different colors (red, green, blue, intensity) that is updated when the image is edited. The edited image can then be saved to the user's local storage.
            </p>
        </div>
    );
}