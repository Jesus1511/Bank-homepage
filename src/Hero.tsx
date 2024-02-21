import heroBgMobile from "./images/bg-intro-mobile.svg"
import heroBgDesktop from "./images/bg-intro-desktop.svg"
import heroPhones from "./images/image-mockups.png"


export const Hero = () => {
  return (
    <>
    <section className="bg-[#f4f4f4] z-0 pb-14 lg:flex flex-row-reverse">

    <div className="h-[400px] lg:w-[821px]">
        <picture className="">
            <source srcSet={heroBgMobile} media="(max-width: 1024px)" />
            <source srcSet={heroBgDesktop} media="(min-width: 1025px)" />
            <img className="w-[100vw] h-[388px] lg:w-auto lg:h-[1000px] lg:absolute  right-[-420px] top-[-150px] lg:max-w-[80vw]" src={heroBgMobile} alt="" />
        </picture>
        <img className=" translate-x-[-50%] absolute top-0 w-[340px] left-[50%] z-0 lg:w-auto lg:h-[900px] lg:translate-x-[165px] " src={heroPhones} alt="" />
    </div>

    <div className="lg:pt-[185px] lg:pb-[100px]">
        <h1 className="text-[#292a39] text-center text-[40px] leading-[55px] mb-5 w-[375px] m-auto lg:text-[60px] lg:leading-[75px] lg:w-[600px] lg:text-left lg:pl-[100px]">Next generation digital banking</h1>
        <p className="sm:w-[500px] sm:my-7 text-gray-500 text-center mb-5 w-[375px] m-auto lg:text-left lg:pl-[70px] lg:w-[550px] lg:text-[19px]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more</p>
        <button className=" rounded-[25px] px-8 py-3 bg-gradient-to-r text-white to-blue-400 from-green-400 block m-auto lg:ml-[94px]">Request Invite</button>
    </div>

    </section>
    </>
  )
}
