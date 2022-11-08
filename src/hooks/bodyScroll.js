import {useState, useEffect} from 'react'

const useSetBodyScroll = () => {
  const [bodyScroll, setBodyScroll] = useState(true)

  useEffect(() => {
    bodyScroll
      ? (document.body.style.overflow = null)
      : (document.body.style.overflow = 'hidden')
  }, [bodyScroll])

  return setBodyScroll
}

export default useSetBodyScroll
