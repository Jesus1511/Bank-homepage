import {Nav} from "./Nav.tsx"
import { Hero } from "./Hero.tsx"
import { Whychoose } from "./Whychoose.tsx"
import { Articles } from "./Articles.tsx"
import { Footer } from "./Footer.tsx"

export const App = () => {
  return (
    <div >
      <nav>
        <Nav />
      </nav>
      <main >
        <Hero />
        <Whychoose />
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
