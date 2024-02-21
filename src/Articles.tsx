import recibeMoney from "./images/image-currency.jpg"
import eating from "./images/image-restaurant.jpg"
import plane from "./images/image-plane.jpg"
import confeti from "./images/image-confetti.jpg"


export const Articles = () => {
  return (
    <section className="pt-[80px] bg-[#f4f4f4]">

        <h2 className="text-center text-[30px] w-[375px] m-auto lg:text-left lg:ml-[140px] " >Latest Articles</h2>
        
        <div className="articles lg:flex justify-around lg:px-[110px] flex-wrap">

          <div className="w-[315px] relative left-[50%] translate-x-[-50%] lg:static lg:translate-x-0 lg:h-auto lg:w-[250px]">
            <img src={recibeMoney} alt="" />

            <div>
              <p className="autor">By Claire Robinson</p>
              <h3>Recibe money in any currency with no fees</h3>
              <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
            </div>
          </div>

          <div className="w-[315px] relative left-[50%] translate-x-[-50%] lg:static lg:translate-x-0 lg:h-auto lg:w-[250px]">
            <img src={eating} alt="" />

            <div>
              <p className="autor">By Wilson Hutton</p>
              <h3>Treat yourself without worryng about money</h3>
              <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
            </div>
          </div>

          <div className="w-[315px] relative left-[50%] translate-x-[-50%] lg:static lg:translate-x-0 lg:h-auto lg:w-[250px]">
            <img src={plane} alt="" />

            <div>
              <p className="autor">By Wilson Hutton</p>
              <h3>Take your Easybank card wherever you go</h3>
              <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
            </div>
          </div>

          <div className="w-[315px] relative left-[50%] translate-x-[-50%] lg:static lg:translate-x-0 lg:h-auto lg:w-[250px]">
            <img src={confeti} alt="" />

            <div>
              <p className="autor">By Claire Robinson</p>
              <h3>Our invite-only Beta accounts are now live!</h3>
              <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
            </div>
          </div>

        </div>
    </section>
  )
}
