import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const SingleArticle = () => {
  const { id } = useParams()

  useEffect = () => {
    const fetchData = async () => {
      let response = await getSingleArticle(id)
    }
  }

  return (
    <div>
      HELLO FROM ARTICLE {id}
    </div>
  )
}

export default SingleArticle
