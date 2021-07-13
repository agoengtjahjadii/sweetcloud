import logo from "./Assets/logo.svg";
import heroImg from "./Assets/images/hero.svg";
import menu from "./Assets/menu.svg";
import cms from "./Assets/images/cms.svg";

export const NavBar = () => {
  return (
    <div>
      {/* start navigation bar */}
      <nav
        style={{ margin: "0 auto" }}
        className="flex justify-between max-w-screen-2xl py-2 my-2 font-body"
      >
        <div className="flex items-center space-x-8">
          <img src={logo} alt="" />
          <div className="space-x-3">
            <a href="#">Home</a>
            <a href="#">Our Work</a>
            <a href="#">What We Do</a>
            <a href="#">About Us</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={menu} alt="" />
          <a href="#">Contact Us</a>
          <button className="text-white bg-body px-3 rounded-full ">
            Let's Talk
          </button>
        </div>
      </nav>
      {/* end of navigation bar */}
      {/* start hero section */}
      <section className="flex flex-col items-center justify-center space-y-6 font-body">
        <div className="w-3/5 mt-32 font-body font-extrabold text-8xl text-center">
          <span className="block">We are ready</span>
          <span style={{ marginTop: "-12px" }} className=" block">
            for fighting with you
          </span>
        </div>
        <p className="text-2xl">Create more than them</p>
        <button className="px-5 py-2 w-auto rounded-full text-lg bg-body text-body-white">
          Let Discuss
        </button>
        <img src={heroImg} alt="" />
      </section>
      {/* end off hero section */}
      {/* Our work section */}
      <div
        style={{ margin: "0 auto" }}
        className="flex flex-col items-center font-body max-w-screen-2xl"
      >
        <section>
          <div className="text-center">
            <span className="block text-2xl text-primary font-bold">
              Our work
            </span>
            <div className="text-body text-5xl font-bold">
              <span className="block  ">Lets See Our</span>
              <span className="block ">Cool Latest Project</span>
            </div>
          </div>
          <div className=" mb-12 grid grid-cols-2 gap-4 mt-14">
            <div style={{ background: "#FFB422" }} className="relative">
              <div className="text-white p-12 absolute">
                <span className="block text-7xl  ">CMS</span>
                <span className="block text-2xl ">
                  Content Management System
                </span>
              </div>
              <img className=" right-0 bottom-0" src={cms} alt="" />
            </div>

            <div style={{ background: "#FFB422" }} className="relative">
              <div className="text-white p-12 absolute">
                <span className="block text-7xl  ">CMS</span>
                <span className="block text-2xl ">
                  Content Management System
                </span>
              </div>
              <img className=" right-0 bottom-0" src={cms} alt="" />
            </div>
          </div>
        </section>
        {/* Get closer with us */}
        <section className="mt-20">
          <div className="text-center">
            <span className="block text-5xl font-bold text-body">
              Get CLoser With Us
            </span>
            <span className="block text-2xl text-body-light">
              Help and find with design solution, We Made...
            </span>
          </div>
          <div className="flex space-x-4 mt-20">
            <div style={{ width: "296px" }} className="text-center">
              <div
                style={{
                  height: "317px",
                }}
                className=" bg-gray-200 inline-block overflow-hidden m-auto bg-cover"
              >
                <img
                  src="https://picsum.photos/400?grayscale"
                  alt="random-image"
                  className="min-h-full min-w-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-body">
                  Digital Strategy
                </span>
                <span className="text-body-light p-2">
                  Komposisi design untuk mengatur segala sesuatu yang
                  berhubungan dengan design graphic untuk market anda
                </span>
              </div>
            </div>
            <div style={{ width: "296px" }} className="text-center">
              <div
                style={{
                  height: "317px",
                }}
                className=" bg-gray-200 inline-block overflow-hidden m-auto bg-cover"
              >
                <img
                  src="https://picsum.photos/400?grayscale"
                  alt="random-image"
                  className="min-h-full min-w-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-body">
                  Design advertisment{" "}
                </span>
                <span className="text-body-light p-2 ">
                  Pembuatan design sytem dan research terhadap product maupun
                  ide project anda .
                </span>
              </div>
            </div>
            <div style={{ width: "296px" }} className="text-center">
              <div
                style={{
                  height: "317px",
                }}
                className=" bg-gray-200 inline-block overflow-hidden m-auto bg-cover"
              >
                <img
                  src="https://picsum.photos/400?grayscale"
                  alt="random-image"
                  className="min-h-full min-w-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-body">
                  UI/UX Design
                </span>
                <span className="text-body-light p-2">
                  Pembuatan design sytem dan research terhadap product maupun
                  ide project anda .
                </span>
              </div>
            </div>
            <div style={{ width: "296px" }} className="text-center">
              <div
                style={{
                  height: "317px",
                }}
                className=" bg-gray-200 inline-block overflow-hidden m-auto bg-cover"
              >
                <img
                  src="https://picsum.photos/400?grayscale"
                  alt="random-image"
                  className="min-h-full min-w-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-body">Web Design</span>
                <span className="text-body-light">
                  Komposisi design untuk mengatur segala sesuatu yang
                  berhubungan dengan design graphic untuk market anda
                </span>
              </div>
            </div>
            <div style={{ width: "296px" }} className="text-center">
              <div
                style={{
                  height: "317px",
                }}
                className=" bg-gray-200 inline-block overflow-hidden m-auto bg-cover"
              >
                <img
                  src="https://picsum.photos/400?grayscale"
                  alt="random-image"
                  className="min-h-full min-w-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-body">
                  VIsual Identity
                </span>
                <span className="text-body-light">
                  Pembuatan design sytem dan research terhadap product maupun
                  ide project anda .
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="text-5xl font-bold">
                Lets make something Big Together
              </span>
              <span className="text-base text-body-light">
                Let's collaborate together see someof our latest work and how we
                deal with problems and solve with design thinking
              </span>
            </div>
            <div className="flex flex-col">
              <input type="text" placeholder="name" />
              <input type="text" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Something"
              ></textarea>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
