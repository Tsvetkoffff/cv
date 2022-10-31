import {useState, useEffect} from 'react'

const useSetBodyScroll = () => {
  const [bodyScroll, setBodyScroll] = useState(true)

  useEffect(() => {
    bodyScroll
      ? (document.body.style.overflowY = 'scroll')
      : (document.body.style.overflowY = 'hidden')
  }, [bodyScroll])

  return setBodyScroll
}

export default useSetBodyScroll
