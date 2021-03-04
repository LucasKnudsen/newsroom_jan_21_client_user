import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const SingleArticle = () => {
  const { id } = useParams()

  return (
    <div>
      HELLO FROM ARTICLE {id}
    </div>
  )
}

export default SingleArticle
