import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useOutsideClick from '../../hooks/useOutsideClick';

export default ({ open, onClose, product }) => {
    const dialogRef = useRef(null);
    useOutsideClick(dialogRef, onClose);

    return open && <div className="fixed w-screen h-screen bg-gray-500 bg-opacity-50 z-10 top-0 flex justify-center items-center" >
        <div
            data-testid="modal"
            className={`bg-gray-100 shadow-md rounded-md w-4/5 lg:w-2/5 xl:w-2/5 md:w-2/5 sm:w-2/5 xs:w-2/5 z-20 p-4`}
            tabIndex="-1"
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="relative" ref={dialogRef}>
                    <button type="button" className="p-4 font-bold text-lg" data-dismiss="modal" aria-label="Close" style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }} onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {
                        open && product && <Carousel autoPlay infiniteLoop>
                            {
                                product.images.length > 0 ?
                                    product.images.map(image => <div key={image.href}>
                                        <img alt="" src={image.href} />
                                    </div>)
                                    :
                                    <div>
                                        <img alt="" src={product.hero.href} />
                                    </div>
                            }
                        </Carousel>
                    }
                </div>
            </div>
        </div>
    </div>
}