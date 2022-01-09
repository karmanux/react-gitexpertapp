import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs ( category);

    return (
        <>
            <h3 className="animate__animated animate__rubberBand">{ category }</h3>
            { loading && <p className="animate__animated animate__swing">Cargando Imagenes...</p>}
            <div className="card-grid">
            

                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } />
                    ))
                }

            </div>
        </>
        
    )
}
