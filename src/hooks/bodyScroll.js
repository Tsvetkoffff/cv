import {useState, useEffect} from 'react'

const useSetBodyScroll = () => {
  const [bodyScroll, setBodyScroll] = useState(true)

  useEffect(() => {
    if (!bodyScroll) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [bodyScroll])

  return setBodyScroll
}

export default useSetBodyScroll
