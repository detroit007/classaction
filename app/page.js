import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img alt="logo"
        src="/assets/images/bg_gradiant.png" width="180" height="30" decoding="async"
        data-nimg="1" loading="lazy" style={{color: "transparent"}}
        className="w-full"
      />
    </div>
  )
}
