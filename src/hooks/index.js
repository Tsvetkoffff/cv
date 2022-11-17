import {useState, useEffect} from 'react'

export const useMenuToggle = () => {
  const [areMenuClose, setAreMenuClose] = useState(true)

  useEffect(() => {
    areMenuClose
      ? (document.body.style.overflow = null)
      : (document.body.style.overflow = 'hidden')
  }, [areMenuClose])

  return [areMenuClose, setAreMenuClose]
}