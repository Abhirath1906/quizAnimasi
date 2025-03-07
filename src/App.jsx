import { useEffect, useRef } from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Dog1 from './assets/Dog1.jpg.svg';
import IG from './assets/IG.jpg.svg';
import FB from './assets/FB.jpg.svg';
import PP from './assets/PP.jpg.svg';
import YT from './assets/YT.jpg.svg';
import TELE from './assets/TELE.jpg.svg';

function App() {
  const isinya = useRef();
  const DOGGY = useRef();
  const socialMediaRefs = useRef([]);
  const videoRef = useRef(); // Reference for the video
  const projecttt = useRef();
  const project2 = useRef();
  const project3 = useRef();
  const alldiv = useRef()
  const ALLDIV = useRef()

  useEffect(() => {

    const elements1 = document.querySelectorAll('.container-text');

    elements1.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.1, duration: 0.3 });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });

    const elements3 = document.querySelectorAll('.container-text-tambahan');

    elements3.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.1, duration: 0.3 });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });

    const elements4 = document.querySelectorAll('.container-text-tmbhn3');

    elements4.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.1, duration: 0.3 });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });


    const elements2 = document.querySelectorAll('.container-text-tmbhn2');

    elements2.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.1, duration: 0.3 });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });




    const elementsApp = document.querySelectorAll('.container-apply');

    elementsApp.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.1, duration: 0.3 });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });






    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    // DONATE
    const mouse = document.querySelector('.isidonate');
    mouse.addEventListener("mouseenter", () => {
      gsap.to(isinya.current, { scale: 1.3, duration: 0.5 })
        .eventCallback("onComplete", () => {
          gsap.to(isinya.current, { scale: 1, duration: 0.5 });
        });
    });

    // DOGGY
    const doggyy = document.querySelector('.Doggy');
    doggyy.addEventListener("mouseenter", () => {
      gsap.to(DOGGY.current, { scale: 1.3, duration: 0.3 })
        .eventCallback("onComplete", () => {
          gsap.to(DOGGY.current, { scale: 1, duration: 0.3 });
        });
    });



    const satu = document.querySelector(".satu")
    satu.addEventListener("mouseenter", () => {
      gsap.to(project2.current, { scale: 1.1, duration: 0.5 });

      satu.addEventListener("mouseleave", () => {
        gsap.to(project2.current, { scale: 1, duration: 0.5 });
      });
    });

    const dua = document.querySelector(".dua")
    dua.addEventListener("mouseenter", () => {
      gsap.to(project3.current, { scale: 1.1, duration: 0.5 });

      dua.addEventListener("mouseleave", () => {
        gsap.to(project3.current, { scale: 1, duration: 0.5 });
      });
    });

    const projectt = document.querySelector(".tiga")
    projectt.addEventListener("mouseenter", () => {
      gsap.to(projecttt.current, { scale: 1.1, duration: 0.5 });

      projectt.addEventListener("mouseleave", () => {
        gsap.to(projecttt.current, { scale: 1, duration: 0.5 });
      });
    });

    // Social media hover effect
    socialMediaRefs.current.forEach((img) => {
      img.addEventListener('mouseenter', () => {
        gsap.to(img, { scale: 1.3, duration: 0.5 });
      });

      img.addEventListener('mouseleave', () => {
        gsap.to(img, { scale: 1, duration: 0.5 });
      });
    });





    gsap.to(alldiv.current, {
      scrollTrigger: {
        trigger: alldiv.current,
        start: "top 85%",
        end: "top 30%",
        scrub: true,
        markers: false,
      },
      x: "100px",

    })




    gsap.from(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        markers: false,
      },
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Reverse animation when scrolling up
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top 20%",
      end: "top 60%",
      markers: false,
      onEnter: () => gsap.to(videoRef.current, { x: "230px", opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to(videoRef.current, { x: "-230px", opacity: 0, duration: 1 }),
    });

    // Adjusted ScrollTrigger animations for the project sections (div1, div2, div3)
    const projectSections = [projecttt.current, project2.current, project3.current];

    projectSections.forEach((section, index) => {
      // gsap.from(section, {
      //   scrollTrigger: {
      //     trigger: section,
      //     start: "top 80%", // Trigger when section is 80% into the viewport
      //     end: "top 20%",   // End animation when it is 20% from the top
      //     scrub: true,      // Make animation sync with scroll
      //     markers: false,   // Turn off markers (for clean testing)
      //   },
      //   x: "-100%",        // Start from the left of the viewport
      //   opacity: 0,        // Start from invisible
      //   duration: 1,       // Duration of the animation
      //   ease: "power2.out",// Easing for smoothness
      // });

      // Reverse animation when scrolling up
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",   
        end: "top 80%",   
        onEnter: () => gsap.to(section, { x: "0%", opacity: 1, duration: 0.5 }),  
        onLeaveBack: () => gsap.to(section, { x: "-100%", opacity: 0, duration: 0.5 }), 
      });
    });

  }, []);

  return (
    <>
      <body className='allContainer'>
        <div style={{ display: 'flex', flexDirection: 'column', height: '360vh' }}>

          <div className='donate'>
            <p ref={isinya} className='isidonate'>donate</p>
          </div>

          <div style={{ flex: 1, backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginTop: "-100px" }}>
              <div ref={DOGGY} className='container-doggy'>
                <img className='Doggy' src={Dog1} alt='Dog1' />
              </div>
              <div className='container-inovatif'>
                <h2 style={{ margin: 0 }}>Inovatif</h2>
                <h2 style={{ margin: 0 }}>Solutions</h2>
                <h2 style={{ margin: 0 }}>For</h2>
                <h2 style={{ margin: 0 }}>Animals</h2>
              </div>

              <div className='charity'>
                charity organization
              </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: "30px", marginLeft: "20px" }}>
              <img className='Gambar' ref={(el) => socialMediaRefs.current[0] = el} src={YT} alt="YouTube" />
              <img className='Gambar' ref={(el) => socialMediaRefs.current[1] = el} src={IG} alt="Instagram" />
              <img className='Gambar' ref={(el) => socialMediaRefs.current[2] = el} src={FB} alt="Facebook" />
              <img className='Gambar' ref={(el) => socialMediaRefs.current[3] = el} src={PP} alt="Pinterest" />
              <img className='Gambar' ref={(el) => socialMediaRefs.current[4] = el} src={TELE} alt="Telegram" />
            </div>
          </div>

          <div style={{ flex: 1, backgroundColor: 'white', fontFamily: "Arial, Helvetica, sans-serif" }}>

            <div style={{
              fontSize: "60px", fontWeight: "bold", display: "flex", justifyContent: "flex-start",
              marginTop: "100px", marginLeft: "100px"
            }}>
              <p>WE ARE</p>
            </div>

            <div className='WEAREtext'>
              team of like-minded people, socially active companies, media personalities, volunteers
              who help low-income shelters and foster carers to support homeless animals.
            </div>

            <div>
              <p style={{
                fontSize: "60px", fontWeight: "bold", display: "flex", justifyContent: "flex-start",
                marginTop: "100px", marginLeft: "100px"
              }}>Our primary goal</p>
            </div>

            <div className='WEAREtext'>
              <p>is to provide animals with the most necessary things - food, medicine, and urgent needs for the livelihood of shelters. We believe in our power and the power of conscious citizens who care about the environment and their health, who understand the importance of helping each other, especially our little friends. Growth begins with your care for your loved ones. Animals are one of the closest creatures to humans who remain with us throughout our lives. We all know the healing power of warmth, grace, and big loving eyes.</p>
            </div>

            <div className='Animals'>
              <p>"Animals need to have friends. Just like humans."</p>
              <p>- James Herriot, All Creatures Great and Small</p>
            </div>

            <div className='WEAREtext'>
              <p>Who else if not we should support our younger brothers, especially in difficult times? Let's be friends!</p>
            </div>

            <div ref={videoRef}>
              <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/5Wk1rp99B7o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'blue', height: '190vh', width: '100vw', marginTop: "130px" }}>
          <div style={{
            fontSize: "60px", fontWeight: "bold", display: "flex", justifyContent: "flex-start",
            marginTop: "100px", marginLeft: "100px", color: "white"
          }}>
            <p>Our projects</p>
          </div>

          <div style={{ marginTop: "30px" }} >
            <p className='text'>are very different in terms of priority, scale and complexity of</p>
            <p className='text'>implementation</p>
          </div>

          <div ref={{ alldiv }} style={{ color: "white", fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: "30px" }}>
            {/* div1 */}
            <div className="satu" ref={project2} style={{ backgroundColor: 'black', padding: '50px', transition: 'transform 0.3s', cursor: 'pointer', border: "3px solid white" }}>
              <p className="satu" ref={project2} style={{ fontWeight: "bold" }}>Emergency Aid. WAR 2022.</p>
              <p>Providing food and medicine to the shelters and animals which lost their homes and families due to the war</p>
            </div>

            {/* div2 */}
            <div className="dua" ref={project3} style={{ backgroundColor: 'green', padding: '50px', transition: 'transform 0.3s', cursor: 'pointer', border: "3px solid white" }}>
              <p className="dua" ref={project3} style={{ fontWeight: "bold" }}>Non-commercial feed line</p>
              <p>Construction of industrial production base where food for shelters will be produced on a free basis</p>
            </div>

            {/* div3 */}
            <div className="tiga" ref={projecttt} style={{ backgroundColor: 'pink', padding: '50px', transition: 'transform 0.3s', cursor: 'pointer', border: "3px solid white" }}>
              <p className="tiga" ref={projecttt} style={{ fontWeight: "bold" }}>Education and Control</p>
              <p>Lectures on communication, organisation and coordination of processes, control over the use of aid</p>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'yellow', height: '350vh', width: '100vw' }}>
          <div style={{
            fontSize: "60px", fontWeight: "bold", display: "flex", justifyContent: "flex-start",
            marginLeft: "40px"
          }}>
            <p style={{ marginTop: "130px" }}>We want to help</p>
          </div>

          <div>
            <p className='WEAREtext'>homeless packs, volunteers, guardians, overstayers, shelters and</p>
            <p className='WEAREtext'> other organisations</p>
          </div>

          <div>

            <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

              <div className='container-text'>
                <p>Shelter of Victoria Bulbyna</p>
              </div>

              <div className='container-text-tambahan'>
                <p>City of faithful hearts</p>
              </div>

              <div className='container-text'>
                <p>Shelter of Natalia</p>
                <p style={{ marginLeft: "5px" }}>Tymoshenko</p>
              </div>

            </div>


            <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

              <div className='container-text'>
                <p>Shelter of Victoria Bulbyna</p>
              </div>

              <div className='container-text'>
                <p>Shelter of Victoria</p>
                <p style={{ marginLeft: "5px" }}>Bondarenko</p>
              </div>

              <div className='container-text'>
                <p>Shelter of Natalia</p>
                <p style={{ marginLeft: "5px" }}>Tymoshenko</p>
              </div>

            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

            <div className='container-text-tmbhn2'>
              <p>Zoo chance</p>
            </div>

            <div className='container-text-tmbhn3'>
              <p>Save lives</p>
            </div>

            <div className='container-text'>
              <p>Shelter of Natalia Tymoshenko</p>
            </div>

          </div>


          <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

            <div className='container-text'>
              <p>Shelter of Victoria Bulbyna</p>
            </div>

            <div className='container-text-tambahan'>
              <p>City of faithful hearts</p>
            </div>

            <div className='container-text'>
              <p>Shelter of Natalia</p>
              <p style={{ marginLeft: "5px" }}>Tymoshenko</p>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

            <div className='container-text'>
              <p>Shelter of Victoria Bulbyna</p>
            </div>

            <div className='container-text-tambahan'>
              <p>City of faithful hearts</p>
            </div>

            <div className='container-text'>
              <p>Shelter of Natalia</p>
              <p style={{ marginLeft: "5px" }}>Tymoshenko</p>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

            <div className='container-text-tmbhn2'>
              <p>Zoo chance</p>
            </div>

            <div className='container-text-tmbhn3'>
              <p>Save lives</p>
            </div>

            <div className='container-text'>
              <p>Shelter of Natalia Tymoshenko</p>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

            <div className='container-text'>
              <p>Shelter of Victoria Bulbyna</p>
            </div>

            <div className='container-text-tambahan'>
              <p>City of faithful hearts</p>
            </div>

            <div className='container-text'>
              <p>Shelter of Natalia</p>
              <p style={{ marginLeft: "5px" }}>Tymoshenko</p>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

            <div className='container-text-tmbhn2'>
              <p>Zoo chance</p>
            </div>

            <div className='container-text-tmbhn3'>
              <p>Save lives</p>
            </div>

            <div className='container-text'>
              <p>Shelter of Natalia Tymoshenko</p>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

            <div className='container-text'>
              <p>Shelter of Victoria Bulbyna</p>
            </div>

            <div className='container-text-tambahan'>
              <p>City of faithful hearts</p>
            </div>

            <div className='container-text'>
              <p>Shelter of Natalia</p>
              <p style={{ marginLeft: "5px" }}>Tymoshenko</p>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "20px" }}>

            <div className='container-text-tmbhn2'>
              <p>Zoo chance</p>
            </div>

            <div className='container-text-tmbhn3'>
              <p>Save lives</p>
            </div>

            <div className='container-text'>
              <p>Shelter of Natalia Tymoshenko</p>
            </div>

          </div>


          <div className='container-apply'>
            <p className='isi-apply'>Apply for help   ------))</p>
          </div>

        </div>

        <div style={{ backgroundColor: 'white', height: '190vh', width: '100vw' }}>






        </div>





      </body>
    </>
  );
}

export default App;
