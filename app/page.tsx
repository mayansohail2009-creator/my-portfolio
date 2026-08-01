import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Credentials from "./components/Credentials";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Banner />
      <About />
      <Credentials />
      <Projects />
      <Footer />
    </main>
  );
}
