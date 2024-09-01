import Image from 'next/image';
import styles from './section.module.css';
const MainSection = () => {
    return (
      <main className="relative flex w-full max-w-[120.00rem] h-[50.88rem] bg-[#1A1A1A] text-white py-0 px-0">
        <div className="flex flex-row w-full">
          <div className="flex flex-col justify-center relative bg-[#141414] text-white w-2/4 mb-3.5 pt-0 pr-0 pb-0 pl-40">
            <div className="text-6xl mb-6 font-semibold leading-normal">Discover Your Dream Property with Estatein</div>
            <div>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</div>
          </div>
          <div className={styles.mainImage}>
            <Image
              src="/images/mainAbstractDesign.svg"
              alt="Main Image"
              layout="fill"
              objectFit="cover"
            />            
            <Image
              src="/images/mainImage.svg"
              alt="Main Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </main>
    )
}

export default MainSection; 