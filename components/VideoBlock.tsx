import React from 'react'

interface VideoBlockProps {
    embedId: string;
    width:string;
    height:string;
    description: string;
}

const VideoBlock = ({ embedId,width,height,description }: VideoBlockProps) => {
    return (
        <div className="mb-10">
            <iframe
                //className='w-full h-auto'
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Player"
            />
            <div className='text-gold-500 text-lg font-medium max-w-80 mx-auto text-center'><p>{description}</p></div>
        </div>
    )
}

export default VideoBlock
