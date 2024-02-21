import chooseImgOn from "./images/icon-online.svg"
import chooseImgTw from "./images/icon-budgeting.svg"
import chooseImgTr from "./images/icon-onboarding.svg"
import chooseImgFo from "./images/icon-api.svg"

export const Whychoose = () => {
  return (
    <section className="bg-[#eef1f3] pt-14 lg:pb-[50px]">
        <div className="lg:pl-[130px]">
            <h2 className="text-[#414D6A] leading-10 m-auto mb-5 w-[200px] text-[30px] text-center lg:text-left lg:m-0 lg:w-[400px]">Why choose Easybank?</h2>
            <p className="text-[#878787] m-auto w-[375px] text-center mb-10 lg:text-left lg:m-[0] lg:w-[570px] lg:mt-[20px] lg:mb-[40px]">We leverage Open Banking to turn your bank account into your financial hub, Control your finances like never before.</p>
        </div>
        <div className="sm:flex flex-wrap justify-center pb-10">
            <div className="whyChoose  lg:w-[300px]">
                <img className="lg:m-0 m-auto" src={chooseImgOn} alt="" />
                <h3 className=" m-auto w-[335px] text-center lg:text-left">Online Banking</h3>
                <p className=" m-auto w-[335px] lg:w-[250px] lg:text-left text-center lg:m-0">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className="whyChoose lg:w-[300px]">
                <img className="lg:m-0 m-auto" src={chooseImgTw} alt="" />
                <h3 className=" m-auto w-[335px] text-center lg:text-left">Simple Budgeting</h3>
                <p className=" m-auto w-[335px] lg:w-[250px] lg:text-left text-center lg:m-0">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </div>
            <div className="whyChoose lg:w-[300px]">
                <img className="lg:m-0 m-auto" src={chooseImgTr} alt="" />
                <h3 className=" m-auto w-[335px] text-center lg:text-left">Fast Onboarding</h3>
                <p className=" m-auto w-[335px] lg:w-[250px] lg:text-left text-center lg:m-0">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div className="whyChoose lg:w-[300px]">
                <img className="lg:m-0 m-auto" src={chooseImgFo} alt="" />
                <h3 className=" m-auto w-[335px] text-center lg:text-left">Open API</h3>
                <p className=" m-auto w-[335px] lg:w-[250px] lg:text-left text-center lg:m-0">Manage your savings, investments, pension, and much more from one account Tracking your money has never been easier.</p>
            </div>
        </div>
    </section>
  )
}
