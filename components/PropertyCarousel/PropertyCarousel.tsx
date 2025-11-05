'use client'

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import "./PropertyCarousel.scss"
import { portfolios, PortfoliosType } from '@/lib/cms';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';


const PropertyCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % portfolios.length);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [portfolios.length, isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + portfolios.length) % portfolios.length);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [portfolios.length, isTransitioning]);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    const currentSlideData = portfolios[currentSlide];

    const router = useRouter();

    const handleRedirect = () => {
        router.push(`/portfolio`);
    };
    return (
        <div
            className='property_carousel'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className='carousel_track'>
                {portfolios.map((slide, index) => {
                    console.log("slide: ", slide.images[0])
                    return (
                        <div
                            key={slide.id}
                            className={`property_images ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : 'next'}`}
                        >
                            {slide.images[0].map((image, imgIndex) => (
                                <div key={imgIndex} className='property_image_wrapper'>
                                    <Image
                                        onClick={handleRedirect}
                                        className='property_image'
                                        alt={`${image} - Image ${imgIndex + 1}`}
                                        // alt={`${slide.title} - Image ${imgIndex + 1}`}
                                        fill
                                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                        src={image}
                                        style={{ objectFit: 'cover' }}
                                        priority={index === 0 && imgIndex === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>

            <div className='property_details'>
                <div className='grid gap-[2px] text_content' onClick={handleRedirect} >
                    <p className='client_name cursor-pointer' key={`name-${currentSlide}`}>{currentSlideData.title}</p>
                    <p className='property_address cursor-pointer' key={`address-${currentSlide}`}>{currentSlideData.location}</p>
                </div>
                <div className='carousel_buttons'>
                    <Button onClick={prevSlide} >
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Button>
                    {/* <button onClick={prevSlide} aria-label="Previous slide" disabled={isTransitioning}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button> */}
                    <div className='carousel_slide_count'>
                        <p key={`count-${currentSlide}`}>{String(currentSlide + 1).padStart(2, '0')}</p>
                        <span>/</span>
                        <p>{String(portfolios.length).padStart(2, '0')}</p>
                    </div>

                    <Button onClick={nextSlide} aria-label="Next slide">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Button>
                    {/* <button onClick={nextSlide} aria-label="Next slide" disabled={isTransitioning}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default PropertyCarousel;

export const PropertyCarouselPerson = ({ item }: { item: PortfoliosType }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % item.images.length);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [item.images.length, isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + item.images.length) % item.images.length);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [item.images.length, isTransitioning]);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    // const currentSlideData = item.images[currentSlide];

    return (
        <div
            className='property_carousel'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className='carousel_track'>
                {item.images.map((slide, index) => {
                    console.log("slide: ", slide)
                    return (
                        <div
                            key={index}
                            className={`property_images ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : 'next'}`}
                        >
                            {
                                slide.map((image, imageIndex) => {
                                    return (
                                        <div className='property_image_wrapper'>
                                            <Image
                                                className='property_image'
                                                alt={`${image} - Image ${imageIndex + 1}`}
                                                fill
                                                // width={1257}
                                                // height={698}
                                                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                                src={image}
                                                priority={imageIndex === 0 && imageIndex === 0}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </div>

            <div className='property_details'>
                <div className='grid gap-[2px] text_content'>
                    <p className='client_name' key={`name-${currentSlide}`}>{item.title}</p>
                    <p className='property_address' key={`address-${currentSlide}`}>{item.location}</p>
                </div>
                <div className='carousel_buttons'>
                    {/* <button onClick={prevSlide} aria-label="Previous slide" disabled={isTransitioning}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button> */}
                    <Button onClick={prevSlide} >
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Button>
                    <div className='carousel_slide_count'>
                        <p key={`count-${currentSlide}`}>{String(currentSlide + 1).padStart(2, '0')}</p>
                        <span>/</span>
                        <p>{String(item.images.length).padStart(2, '0')}</p>
                    </div>

                    <Button onClick={nextSlide} aria-label="Next slide">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Button>
                    {/* <button onClick={nextSlide} aria-label="Next slide" disabled={isTransitioning}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    );
};