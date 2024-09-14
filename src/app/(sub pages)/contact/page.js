
import Image from "next/image";
import bg from "../../../../public/background/contact-bg.jpeg"
import Form from "@/components/contact/Form";




export default function Contact() {
  return (
    <>
  
    <Image    priority sizes="100vw"src={bg}
     alt="background-image"   className=" -z-50 fixed top-0 left-0  w-full h-full object-cover object-center opacity-25"/>

     <article className="relative w-full flex flex-col items-center justify-center  py-8 sm:py-0 space-y-8">
      <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
      <h1 className="text-4xl font-semibold text-accent capitalize">
        Summon  The Cosmic Sage 
        </h1>
<p className="text-center font-light text-sm text-base" >
&quot;Ready to connect with the cosmos? wish to explore new dimensions of collaboration
 feel free to reach out. I am always open to cosmic conversations creative ideas
  and opportunities that expand the universe of possibilities.
 Lets create something stellar together—drop me a message and let the cosmic energy flow&quot;
</p>
      </div>
    <Form/>
     </article>
    </>
  );
}



