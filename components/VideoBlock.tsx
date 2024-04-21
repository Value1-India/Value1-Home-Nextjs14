import React from 'react'

interface VideoBlockProps {
    embedId: string;
    // description: string;
}

const VideoBlock = ({ embedId }: VideoBlockProps) => {
    return (
        <div className="mb-10">
            <iframe
                className='w-full h-auto'
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Player"
            />
        </div>
    )
}

export default VideoBlock
