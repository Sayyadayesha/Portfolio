

"use client"
import React from "react";
import ItemLayout from "./ItemLayout";
const AboutDetails = () => {
    return (
        <section className="py-20 w-full px-10">
            <div className="grid grid-cols-12   gap-4 xs:gap-6 md:gap-8 w-full">
                <ItemLayout className={' col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                    <div className=" ">
                        <h2 className="text-xl:md:text-2xl text-left w-full capitalize">
                            "Architect of Stellar Vision"

                        </h2>
                        <p className="font-light text-xs sm:text-sm md:text-base ">As an architect of stellar vision,
                            I am a passionate software engineering student with a boundless curiosity for exploring the infinite possibilities in technology.
                            With a rooted foundation in languages like Java, JavaScript, and React,
                            and experience in cutting-edge projects like AI-based medical diagnosis systems and e-commerce portals,
                            I craft solutions that aim to push boundaries. My work bridges the creative with the technical,
                            combining front-end innovation with back-end efficiency. Whether building dynamic web applications
                            or diving into new technologies, I bring a cosmic perspective—always aiming for brilliance and beyond.</p>
                    </div>
                </ItemLayout>


                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>

                    <p className="font-semibold w-full text-left text-5xl text-accent">
                        7+  <sub className="font-semibold text-base">Stellar Certifications</sub>
                    </p>


                </ItemLayout>

                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        Cosmic Explorer<sub className="font-semibold text-base"> 3rd Year Computer Engineering Student</sub>
                    </p>


                </ItemLayout>
                <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}><img className="w-full h-auto"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sayyadayesha&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFF&icon_color=FEFE5B&text_bold=false" alt="Ayesha Pasha" loading="lazy">
                </img></ItemLayout>



                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}><img className="w-full h-auto"
                    src="https://github-readme-stats.vercel.app/api?username=Sayyadayesha&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFF&icon_color=FEFE5B&text_bold=false" alt="Ayesha Pasha" loading="lazy">
                </img></ItemLayout>


                <ItemLayout className={"col-span-full"}><img className="w-full h-auto"
                    src="https://skillicons.dev/icons?i=java,nodejs,js,c,cpp,firebase,github,html,css,mongodb,php,postman,react,vscode,python,&theme=light" alt="Ayesha Pasha" loading="lazy">
                </img></ItemLayout>



                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className='w-full h-auto ' src="https://github-readme-streak-stats.herokuapp.com?user=Sayyadayesha&theme=dark&hide_border
                    =true&background=EB545400&ring=FEFE5B&currStreakLabel=
                    FEFE5B&border=EB545400&currStreakNum=FEFE5BD3&sideNums=EBEA53&sideLabels=FEFE5B"
                        alt="Ayesha Pasha" loading="lazy" />

                </ItemLayout>


                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className='w-full h-auto ' src="https://github-readme-stats.vercel.app/api/pin/?username=Sayyadayesha&title_color=FEFE5B&repo=MERN-Social-Network&theme=transparent&hide_border=true&background=EB545400&border=EB545400"
                        alt="Ayesha Pasha" loading="lazy" />

                </ItemLayout>


               

            </div>{/*dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula). */}
        </section>
    )
}

export default AboutDetails