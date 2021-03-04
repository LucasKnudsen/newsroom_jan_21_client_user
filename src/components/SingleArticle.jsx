import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

// UseParams to get the ID from params and send off a GET request
const SingleArticle = () => {
  const { id } = useParams()

  return (
    <div>
      HELLO FROM ARTICLE {id}
    </div>
  )
}

export default SingleArticle
