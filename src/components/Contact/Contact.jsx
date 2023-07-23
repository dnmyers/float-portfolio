import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    // EmailJS
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'gmail',
                'contact_form_template',
                refForm.current,
                '7s0WnF1S_phn1zQDn'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again.');
                }
            );
    }

    const ContactVariants = {
        visible: {
            opacity: 1,
            translateY: 0,
            transition: {
                // type: 'spring',
                // stiffness: 70,
                // mass: 4,
                type: 'tween',
                ease: 'circOut',
                duration: 0.5
            }
        },
        hidden: {
            opacity: 0,
            translateY: 300
        }
    };

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <main className="relative py-28 bg-gray-900">
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={ContactVariants} 
                className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8"
            >
                <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                    <h2 className="text-cyan-400 font-semibold">
                        Contact Me
                    </h2>
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p className="text-gray-300">
                        I&apos;d love to hear from you! Please fill out the form below.
                    </p>
                </div>
                <motion.div 
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={ContactVariants}
                    className="mt-12 mx-auto px-4 p-8 bg-blue-50 sm:max-w-lg sm:px-8 sm:rounded-xl"
                >
                    <form
                        onSubmit={sendEmail}
                        ref={refForm}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                        <option>US</option>
                                        <option>ES</option>
                                        <option>MR</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    name="phone_number"
                                    placeholder="+1 (555) 000-000"
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea 
                                required 
                                name="message"
                                placeholder="Message..."
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="w-full px-4 py-2 text-white font-medium bg-blue-1 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        />
                    </form>
                </motion.div>
            </motion.div>
            <div 
                className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' 
                style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}
            ></div>
        </main>
    )
}

export default Contact;