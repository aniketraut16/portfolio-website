'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<string | null>(null);
    const [cooldownRemaining, setCooldownRemaining] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('translate-y-10', 'opacity-0');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Check if user is in cooldown period
        const lastEmailSent = localStorage.getItem('lastEmailSent');
        if (lastEmailSent) {
            const timeSinceLastEmail = Date.now() - parseInt(lastEmailSent);
            const oneHourInMs = 60 * 60 * 1000;

            if (timeSinceLastEmail < oneHourInMs) {
                const remainingTime = Math.ceil((oneHourInMs - timeSinceLastEmail) / (60 * 1000));
                setCooldownRemaining(remainingTime);
            }
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if user is in cooldown period
        const lastEmailSent = localStorage.getItem('lastEmailSent');
        if (lastEmailSent) {
            const timeSinceLastEmail = Date.now() - parseInt(lastEmailSent);
            const oneHourInMs = 60 * 60 * 1000;

            if (timeSinceLastEmail < oneHourInMs) {
                const remainingTime = Math.ceil((oneHourInMs - timeSinceLastEmail) / (60 * 1000));
                setCooldownRemaining(remainingTime);
                setSubmitStatus('cooldown');
                return;
            }
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                {
                    name: formData.name,
                    subject: formData.subject,
                    message: formData.message,
                    email: formData.email, // Optional: included for reply-to or logging
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
            );

            // Store the timestamp of successful email send
            localStorage.setItem('lastEmailSent', Date.now().toString());

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="max-w-5xl mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Contact Me</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Feel free to reach out if you have any questions or would like to work together. I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="glass p-6 rounded-xl">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Mail size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                                    <a href="mailto:rautnaniket@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        rautnaniket@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="glass p-6 rounded-xl">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                                    <p className="text-muted-foreground">Nagpur, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl">
                            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/aniketraut16"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                                >
                                    <Github size={20} className="text-primary" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aniketraut16/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                                >
                                    <Linkedin size={20} className="text-primary" />
                                </a>
                                <a
                                    href="https://x.com/aniketraut22"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                                >
                                    <Twitter size={20} className="text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => handleChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || cooldownRemaining !== null}
                                className="px-6 py-3 bg-primary text-primary-foreground rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(var(--primary)/60)] transition-all disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                                    Your message has been sent successfully!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                                    There was an error sending your message. Please try again.
                                </div>
                            )}

                            {(submitStatus === 'cooldown' || cooldownRemaining !== null) && (
                                <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-400">
                                    <p>You can only send one message per hour. Please wait {cooldownRemaining} minute{cooldownRemaining !== 1 ? 's' : ''} or contact me directly at <a href="mailto:rautnaniket@gmail.com" className="underline">rautnaniket@gmail.com</a>.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}