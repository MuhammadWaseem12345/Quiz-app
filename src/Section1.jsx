import React from "react";
import vd from "./assets/vd.mp4";
import img1 from "./assets/img1.webp";
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpeg";
import image5 from "./assets/image5.jpeg";
import image6 from "./assets/image6.jpeg";
import image7 from "./assets/image7.jpeg";
import image8 from "./assets/image8.jpeg";

import image9 from "./assets/image9.png";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.jpg";
const Section1 = () => {
    return (
        <>

            <div className="flex flex-wrap justify-around items-center w-full px-4 py-10 gap-10 min-h-screen">

                <div className="w-full md:w-[80%] lg:w-[40%] flex flex-col justify-center items-start gap-y-6">
                    <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold cursor-pointer">
                        Quiz Maker: Create a quiz to challenge your audience
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl">
                        Make fun interactive quizzes to test your colleagues' knowledge, run a quiz night with friends, or help students study.
                    </p>
                    <button className="py-3 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in">
                        Create a quiz
                    </button>
                </div>


                <div className="w-full md:w-[80%] lg:w-[40%] h-64 sm:h-80 lg:h-[70%]">
                    <video
                        className="h-full w-full bg-white object-cover rounded-xl cursor-pointer"
                        controls
                    >
                        <source src={vd} type="video/mp4" />
                    </video>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center gap-y-5 px-4 py-12 text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold cursor-pointer">
                    Host a quiz to energize your audience
                </h1>
                <p className="text-base sm:text-lg lg:text-xl max-w-2xl">
                    Looking to level up your presentations? Add excitement and interaction with a live quiz! Whether serious or casual, our free quiz maker ensures it's fun and engaging.
                </p>
            </div>

            <div className="bg-[#f2f1f0] py-28">

                <div className="  flex flex-wrap justify-around items-center w-full px-4 py-10 gap-10 min-h-screen">

                    <div className="w-full md:w-[80%] lg:w-[40%] flex flex-col justify-center items-start gap-y-3">
                        <h1 className="font-sans max-sm:text-3xl text-4xl  font-semibold cursor-pointer">
                            How to create your own quiz
                        </h1>
                        <p className="text-xl">
                            Designing a Mentimeter quiz is easy! Enter your questions, mark the correct answers, and you’re set.
                        </p>
                        <p className="text-xl">
                            Use your quiz within a larger presentation, mix it with other Menti questions, or let it stand alone.
                        </p>
                        <p className="text-xl">
                            Combine quiz slides with content slides to add anecdotes or extra info.
                        </p>

                    </div>


                    <div className="w-[40%] h-[69%]">

                        <img src={img1} className="h-full w-full  object-cover cursor-pointer" />


                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-5 px-4 py-12 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold cursor-pointer">
                        Explore quiz templates for work
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl max-w-2xl">
                        Test your colleagues’ knowledge with <a className="underline cursor-pointer">work quizzes!</a> Get your team together and see who knows their stuff.
                    </p>
                </div>


                <div className="flex flex-wrap justify-center items-center  gap-10">
                    <div className="w-[40%] h-[69%] max-xl:w-[80%] max-xl:h-[100%] max-sm:w-full ">
                        <img src={image1} className="h-full w-full  object-cover cursor-pointer   border-2 border-gray-300 border-solid  rounded-2xl" />
                        <h1 className="font-bold text-2xl">Company Quiz</h1>
                        <div className=" flex flex-wrap justify-start items-center mt-5 gap-5">
                            <button className="py-2 px-8  bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in"> Add templates</button>
                            <button className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-1000 delay-200 ease-in">preview</button>
                        </div>
                    </div>

                    <div className="w-[40%] h-[69%] max-xl:w-[80%] max-xl:h-[100%] max-sm:w-full">
                        <img src={image2} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid  rounded-2xl" />
                        <h1 className="font-bold text-2xl">Team Building Quiz</h1>
                        <div className=" flex flex-wrap justify-start items-center mt-5 gap-5">
                            <button className="py-2 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in"> Add templates</button>
                            <button className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-1000 delay-200 ease-in">preview</button>
                        </div>
                    </div>

                    <div className="w-[40%] h-[69%] max-xl:w-[80%] max-xl:h-[100%] max-sm:w-full">
                        <img src={image3} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid  rounded-2xl" />
                        <h1 className="font-bold text-2xl">Search Engine Optimization Quiz</h1>
                        <div className=" flex flex-wrap justify-start items-center mt-5 gap-5">
                            <button className="py-2 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in"> Add templates</button>
                            <button className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-1000 delay-200 ease-in">preview</button>
                        </div>
                    </div>

                    <div className="w-[40%] h-[69%] max-xl:w-[80%] max-xl:h-[100%] max-sm:w-full">
                        <img src={image4} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid rounded-2xl " />
                        <h1 className="font-bold text-2xl">Business Buzzwords Quiz</h1>
                        <div className=" flex flex-wrap justify-start items-center mt-5 gap-5">
                            <button className="py-2 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in"> Add templates</button>
                            <button className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-1000 delay-200 ease-in">preview</button>
                        </div>
                    </div>
                </div>


            </div>



            <div className="flex flex-col justify-center items-center gap-y-5 px-4 py-12 text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold cursor-pointer">
                    Try an education quiz template
                </h1>
                <p className="text-base sm:text-lg lg:text-xl max-w-2xl">
                    Want to make your next class or lecture a bit more engaging and fun? Check out our ready-to-use <a className="underline cursor-pointer">education templates</a>  for your next lesson.
                </p>
            </div>



            <div className="flex flex-wrap justify-center items-center  gap-10">
                <div className="w-[40%] h-[69%] max-xl:w-[80%] max-xl:h-[100%] max-sm:w-full ">
                    <img src={image5} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid  rounded-2xl" />
                    <h1 className="font-bold text-2xl">US History Quiz</h1>
                    <div className=" flex flex-wrap justify-start items-center mt-5 gap-5">
                        <button className="py-2 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in"> Add templates</button>
                        <button className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-1000 delay-200 ease-in">preview</button>
                    </div>
                </div>

                <div className="w-[40%] h-[69%] max-xl:w-[80%] max-xl:h-[100%] max-sm:w-full">
                    <img src={image6} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid  rounded-2xl" />
                    <h1 className="font-bold text-2xl">Countries of the World Quiz</h1>
                    <div className=" flex flex-wrap justify-start items-center mt-5 gap-5">
                        <button className="py-2 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in"> Add templates</button>
                        <button className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-1000 delay-200 ease-in">preview</button>
                    </div>
                </div>

                <div className="w-[40%] h-[69%] max-xl:w-[80%] max-xl:h-[100%] max-sm:w-full">
                    <img src={image7} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid  rounded-2xl" />
                    <h1 className="font-bold text-2xl">World Flags Quiz</h1>
                    <div className=" flex flex-wrap justify-start items-center mt-5 gap-5">
                        <button className="py-2 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in"> Add templates</button>
                        <button className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-1000 delay-200 ease-in">preview</button>
                    </div>
                </div>

                <div className="w-[40%] h-[69%] max-xl:w-[80%] max-xl:h-[100%] max-sm:w-full">
                    <img src={image8} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid rounded-2xl " />
                    <h1 className="font-bold text-2xl">Chemistry Quiz</h1>
                    <div className=" flex flex-wrap justify-start items-center mt-5 gap-3">
                        <button className="py-2 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-60 hover:opacity-80 transition-all duration-1000 delay-200 ease-in"> Add templates</button>
                        <button className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-3xl transition-all duration-1000 delay-200 ease-in">preview</button>
                    </div>
                </div>
            </div>




            <div className="my-32 gap-y-3 flex flex-col justify-center items-center h-auto   w-[100%]">
                <h1 className="w-[70%] font-semibold text-3xl" >Frequently asked questions</h1>
                <details className="w-[70%] max-lg:[100%] mx-auto   rounded-md">
                    <summary className="text-2xl font-lg cursor-pointer focus:bg-gray-200 p-2  hover:opacity-50 transition-all duration-200 delay-150 ease-in">
                        What can I use quizzes for at work?
                    </summary>
                    <p className="mt-2 text-gray-700">
                        Quizzes are a fun and easy way to level up your training,
                        <a href="#" className="text-black underline">team building</a>, and presenting.
                        Test your team’s knowledge with a monthly quiz, improve collaboration, or even boost morale with a fun
                        <a href="#" className="text-black underline">music quiz</a>.
                    </p>
                </details>


                <details className="w-[70%] max-lg:[100%] mx-auto   rounded-md">
                    <summary className="text-2xl font-lg cursor-pointer focus:bg-gray-200 p-2  hover:opacity-50 transition-all duration-200 delay-150 ease-in">
                        How many questions can I add to a quiz?
                    </summary>
                    <p className="mt-2 text-gray-700">
                        You can add as many questions as needed to your Mentimeter quiz. Just keep in mind that you’ll need to allow
                         time for your audience to answer the questions and display answers and leaderboards.
                    </p>
                </details>


                    <details className="w-[70%] max-lg:[100%]  mx-auto  rounded-md">
                    <summary className="text-2xl font-lg cursor-pointer focus:bg-gray-200 p-2  hover:opacity-50 transition-all duration-200 delay-150 ease-in">
                       How do participants join and compete in my quiz?
                    </summary>
                    <p className="mt-2 text-gray-700">
                       Participants can join the quiz from any device with internet access, including smartphones, tablets,
                        and computers. They can join from a QR code or via menti.com with your presentation ID.
                        <a href="#" className="text-black underline"> Learn more about joining a Menti here.</a>.
                    </p>
                </details>



                     <details className="w-[70%] max-lg:[100%] mx-auto  rounded-md">
                    <summary className="text-2xl font-lg cursor-pointer focus:bg-gray-200 p-2  hover:opacity-50 transition-all duration-200 delay-150 ease-in">
                 Is there a limit to the number of participants?
                    </summary>
                    <p className="mt-2 text-gray-700">
                      It depends on which Mentimeter plan you have. If you’re on the Free plan, you can have 50 participants per month.
                       Mentimeter Basic, Pro, and Enterprise plans offer unlimited participants. You can read more about them on our. 
                        <a href="#" className="text-black underline">pricing page.</a>.
                    </p>
                </details>


                     <details className="w-[70%] max-lg:[100%]  mx-auto  rounded-md">
                    <summary className="text-2xl font-lg cursor-pointer  p-2 focus:bg-gray-200  hover:opacity-50 transition-all duration-200 delay-150 ease-in">
                What types of questions can I include in the quiz?
                    </summary>
                    <p className="mt-2 text-gray-700">
                   Mentimeter has two different types of quiz slides: Select answer, with predefined options to choose from
                    (like Multiple Choice), and Type answer, where participants write the answer themselves instead of choosing
                     from a list.
                    </p>
                </details>


                   <details className="w-[70%] max-lg:[100%]  mx-auto   rounded-md">
                    <summary className="text-2xl font-lg cursor-pointer focus:bg-gray-200 p-2  hover:opacity-50 transition-all duration-200 delay-150 ease-in">
               What’s the difference between quiz slides and question slides?
                    </summary>
                    <p className="mt-2 text-gray-700">Quiz slides are designed for competition and have a countdown timer,
                    scores, and Leaderboard slides that reveal a winner. Question slides are designed to gather audience input
                     with a variety of question types, and don’t calculate scores </p>
                </details>

            </div>




             <div className="flex flex-col justify-center items-center gap-y-5 px-4 py-12 text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold cursor-pointer">
                    Become an expert quizmaster
                </h1>
               
             <div className="flex flex-wrap justify-center  mt-10 gap-10">
                  <div className="w-[25%]  h-[69%] hover:-translate-y-5 transition-all duration-500 delay-150 ease-linear max-xl:w-[60%] max-xl:h-[80%] max-sm:w-full">
                    <img src={image9} className="h-full w-full  object-cover cursor-pointer " />
                     <div className="flex flex-wrap justify-start items-center  gap-3">
                    <h1 className="font-semibold text-2xl cursor-pointer">How to host a quiz</h1>
                    <p className="text-left cursor-pointer">A Mentimeter quiz is the perfect way to test, engage and entertain your audience in any number of different
                     situations. This article provides tips to help perfect your quiz-hosting!</p>
                     </div>
                </div>

               
               <div className="w-[25%]  h-[69%] max-xl:w-[60%] max-xl:h-[80%] max-sm:w-full hover:-translate-y-5 transition-all duration-500 delay-150 ease-linear">
                    <img src={image10} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid  " />
                     <div className="flex flex-wrap justify-start items-center  gap-3">
                    <h1 className="font-semibold text-2xl cursor-pointer">How to host a quiz</h1>
                    <p className="text-left cursor-pointer">A Mentimeter quiz is the perfect way to test, engage and entertain your audience in any number of different
                     situations. This article provides tips to help perfect your quiz-hosting!</p>
                     </div>
                </div>


                
               <div className="w-[28%]  h-[69%] max-xl:w-[60%] max-xl:h-[80%] max-sm:w-full hover:-translate-y-5 transition-all duration-500 delay-150 ease-linear">
                    <img src={image11} className="h-full w-full  object-cover cursor-pointer border-2 border-gray-300 border-solid  " />
                     <div className="flex flex-wrap justify-start items-center  gap-3">
                    <h1 className="font-semibold text-2xl cursor-pointer">How to host a quiz</h1>
                    <p className="text-left cursor-pointer">A Mentimeter quiz is the perfect way to test, engage and entertain your audience in any number of different
                     situations. This article provides tips to help perfect your quiz-hosting!</p>
                     </div>
                </div>
             </div>

            </div>


                 <div className="flex flex-col flex-wrap justify-center   w-[100%] items-center bg-[#f8f8fe] py-8 gap-10 ">
                    <h1 className="font-semibold text-3xl cursor-pointer">Mentimeter is more than just quizzes.</h1>
                    <p className=" cursor-pointer text-2xl">It's the ultimate interactive presentation tool.</p>
                     <button className="py-2 px-8 bg-black text-white rounded-3xl cursor-pointer opacity-70 hover:opacity-100 transition-all duration-1000 delay-200 ease-in">Get started, it's free</button>
                     </div>

        </>
    );
};

export default Section1;
