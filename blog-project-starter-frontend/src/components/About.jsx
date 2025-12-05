import React from 'react'

const AboutSection = () => {

  const about = [
    { a_title: "What I Do", a_about: "Enhancing digital experiences that are smooth, scalable, and made to impress" },
    { a_title: "What I’m Looking For", a_about: "I'm currently looking for opportunities as a Frontend or MERN-MongoDB, Express.js, React.js, Node.js Stack Developer" },
    { a_title: "Beyond Code", a_about: "When I'm not coding, I enjoy writing tech blogs and learning new tools" },
  ]


  return (
    <section className="max-w-3xl mx-auto px-2 py-10">

      {
        about.map((item, index) => {
          return <div key={index} className="flex flex-col items-center py-3 hover:scale-[1.02] transition-all duration-300 hover:shadow-md hover:bg-orange-50 rounded-xl p-3">
            <div className="flex flex-col items-center py-3 opacity-0 animate-fade-up">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                {item.a_title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 md:text-2xl text-center font-light">
                {item.a_about}
              </p>
            </div>
          </div>
        })
      }
      
    </section>
  );
};

export default AboutSection;
