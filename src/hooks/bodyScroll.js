import {useState, useEffect} from 'react'

const useSetBodyScroll = () => {
  const [bodyScroll, setBodyScroll] = useState(true)

  useEffect(() => {
    if (!bodyScroll) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [bodyScroll])

  return setBodyScroll
}

export default useSetBodyScroll
