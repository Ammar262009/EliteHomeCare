import React from 'react'

const Photo = (props) => {
    console.log(props.elem)
    return (
        <a href={props.elem.url} target='_blank'>
            <div className='w-42 h-50  overflow-hidden rounded shrink-0'>
                <img className='object-cover object-center w-full h-full' src={props.elem.download_url} alt="" />
            </div>
            <h3 className='font-semibold text-medium text-white'>{props.elem.author}</h3>
        </a>
    )
}

export default Photo