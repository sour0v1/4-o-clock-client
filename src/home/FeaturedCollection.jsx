import watch1 from '../assets/watch/watch-1.webp'
const FeaturedCollection = () => {
    return (
        <div className='font-montserrat max-w-6xl mx-auto mt-16'>
            <h1 className='text-2xl font-bold text-[#01204E]'>Featured Collections</h1>
            <div className='mt-6'>
                <div className='border w-fit space-y-4'>
                    <div className='space-y-4'>
                        <img className='w-60 px-6 pt-6 hover:scale-110 transition-transform duration-150' src={watch1} alt="watch-photo" />
                        <h2 className='font-medium px-6'>Watch Name</h2>
                        <p className='text-[#01204E] px-6'>$110</p>
                    </div>
                    <div className='w-full'>
                        {/* <button className='bg-[#333333] text-white p-2'>Details</button> */}
                        <button className='bg-[#333333] hover:bg-[#1a1a1a] text-white p-2 w-full'>Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCollection;