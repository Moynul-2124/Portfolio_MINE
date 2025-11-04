



'use client';
import React, { useState } from 'react';
import {
    useGetHeadingQuery,
    useGetFormFieldsQuery,
    useGetContactInfoQuery,
} from '../../../../api/upload/dataApi';

export default function ContactPage() {
    const { data: headingData, isLoading: headingLoading } = useGetHeadingQuery();
    const { data: formFields, isLoading: formLoading } = useGetFormFieldsQuery();
    const { data: contactInfo, isLoading: infoLoading } = useGetContactInfoQuery();

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        body: '',
    });

    const [status, setStatus] = useState(null); // success | error | loading

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setForm({ name: '', email: '', subject: '', body: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12 transition-all duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Message Form */}
                <div className="animate-fade-in-up">
                    <h2 className="text-4xl font-extrabold mb-8 tracking-tight">
                        {headingLoading ? 'Loading...' : headingData?.text || 'Message Me'}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder={formFields?.name || 'Your Name'}
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={formFields?.email || 'Your Email'}
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder={formFields?.subject || 'Subject'}
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                        />
                        <textarea
                            name="body"
                            rows="5"
                            placeholder={formFields?.body || 'Your Message'}
                            value={form.body}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 transform hover:scale-105 ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="text-green-400 mt-2">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 mt-2">Failed to send message. Try again.</p>
                        )}
                    </form>
                </div>

                {/* Contact Info */}
                <div className="animate-fade-in-up delay-200">
                    <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Contact Info</h2>
                    {infoLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="space-y-5 text-lg text-gray-300">
                            <p className="italic">{contactInfo?.availabilityNote}</p>
                            <p><span className="font-semibold text-white">Name:</span> {contactInfo?.name}</p>
                            <p><span className="font-semibold text-white">Location:</span> {contactInfo?.location}</p>
                            <p><span className="font-semibold text-white">Call Me:</span> {contactInfo?.phone}</p>
                            <p><span className="font-semibold text-white">Email Me:</span> {contactInfo?.email}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
