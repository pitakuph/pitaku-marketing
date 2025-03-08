import Image from "next/image"
import contactImage from '@/images/screenshots/devices.png'

export default function BeTheHeroContent(){
    return(
      <div className="mx-auto text-center">        
        <h2 className="text-2xl max-w-3xl mx-auto leading-none font-bold font-display tracking-tight text-gray-900 sm:text-3xl">
          Be the Hero of Your Business with <span className='font-bold text-shamrock'>Pitaku!</span>
        </h2>
        <p className="mt-10 max-w-3xl mx-auto text-xl sm:text-2xl leading-8 text-gray-800">
          Every great business has a hero—you. But even heroes need the right tools to win. That’s where Pitaku comes in! Your secret weapon for turning first-time buyers into loyal customers, no capes required.
        </p>
        <Image className='w-full relative my-10 h-[360px] max-w-2xl object-contain object-center z-0 mx-auto' 
          src={contactImage} 
          alt='get-early-access-pitaku-ph' 
          unoptimized 
        />        
        <p className="mt-8 max-w-2xl mx-auto text-xl sm:text-2xl leading-8 text-gray-800">
          What’s in Your Pitaku Toolkit?
        </p>
        <ul className='mt-8 text-sm space-y-2 text-gray-700'>
          <li><span className='font-medium text-green-600'>✔ Instant Rewards, Zero Hassle</span> – No physical cards, no complicated systems—just seamless, digital loyalty.</li>
          <li><span className='font-medium text-green-600'>✔ Stronger Customer Bonds</span> – Turn every visit into an unforgettable experience.</li>
          <li><span className='font-medium text-green-600'>✔ Super Insights (Premium)</span> – Know what your customers love and give them more of it.</li>
          <li><span className='font-medium text-green-600'>✔ Effortless Growth</span> – Keep customers coming back without extra work.</li>
        </ul>
        <p className="mt-10 max-w-3xl mx-auto text-xl sm:text-2xl leading-8 text-gray-800">
          It’s time to unlock your business superpower. Try Pitaku today!
        </p>                
      </div>        
    )
}