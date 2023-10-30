import { useEffect, useState } from 'react'

export const useProgressiveImg = (lowQualitySrc: string, highQualitySrc: string) => {
  const [src, setSrc] = useState<string>(lowQualitySrc)

  useEffect(() => {
    setSrc(lowQualitySrc)

    const img = new Image()
    img.src = highQualitySrc

    img.onload = () => {
      setSrc(highQualitySrc)
    }
  }, [lowQualitySrc, highQualitySrc])

  return [src, { blur: src === lowQualitySrc }] as const
}
