import React from 'react'
import appwriteService from "../appwrite/config" 
import {Link} from 'react-router-dom'

function PostCard({ $id, title, featuredImage}) {

  const imgId = Array.isArray(featuredImage)? featuredImage[0] : featuredImage;
  const imageUrl = imgId
  ? appwriteService.getFilePreview(imgId) : "https://placeholder.com";


  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img 
                src={appwriteService.getFilePreview (featuredImage)} 
                    alt={title} 
                    className='rounded-xl object-cover w-full h-48'
                    onError={(e) => {
                      e.target.src= "https://placeholder.com";
                    }}
                    />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
