import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import PicturePost from '../components/PicturePost/PicturePost'
import { fetchPhotos } from '../redux/actions/photosAction'
import { fetchPosts } from '../redux/actions/postsActions'
import loadings from '../redux/loadings'

export default function Home() {
  const dispatch = useDispatch()

  const loading = useSelector(({ loadingsReducer }) =>
    loadingsReducer.loadings.includes(
      loadings.FETCH_PHOTOS_LOADING
    )
  )

  const photos = useSelector(
    (store) => store.photosReducer.photos
  )

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchPhotos())
  }, [])

  return (
    <div>
      <Header />
      {loading ? (
        <b>Loading...</b>
      ) : (
        photos.map((el, index) => (
          <PicturePost
            key={index}
            image={el.url}
            title={el.title}
          />
        ))
      )}
    </div>
  )
}
