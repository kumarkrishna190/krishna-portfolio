import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" />
      <Section title="">
        <p className="font-bold">Feel free to reach out to me through any of the following channels:</p>

        <p><b>GitHub: </b> 
            <a className="underline" href="https://github.com/kumarkrishna190" target="_blank" rel="noopener noreferrer">
                github.com/kumarkrishna190
            </a>
        </p>

        <p><b>Email: </b> 
            <a className="underline" href="mailto:kumar.krishna190@gmail.com
                ?subject=Collaboration%20with%20Krishna
                &body=Hi%20Krishna,%0D%0A%0D%0AI%20came%20across%20your%20profile%20and%20would%20love%20to%20connect%20with%20you.%0D%0A%0D%0AThanks,%0D%0A">
                kumar.krishna190@gmail.com
            </a>
        </p>

        <p><b>LinkedIn: </b> 
            <a className="underline" href="https://www.linkedin.com/in/kumar-krishna-190/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/kumar-krishna-190
            </a>
        </p>

        <p><b>Instagram: </b> 
            <a className="underline" href="https://www.instagram.com/krisssshhhhhhhh" target="_blank" rel="noopener noreferrer">
                instagram.com/krisssshhhhhhhh
            </a>
        </p>

        <p><b>WhatsApp: </b> 
            <a className="underline" href="https://wa.me/916362354793?text=Hi%20Krishna,%20I%20came%20across%20your%20profile%20and%20would%20love%20to%20connect%20with%20you." 
                target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
            </a>
        </p>

        <p><b>Phone: </b> 
            <a className="underline" href="tel:+916362354793">
                +91 63623 54793
            </a>
        </p>


      </Section>
    </>
  );
}
