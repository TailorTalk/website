import Head from 'next/head';

export default function AboutFounder() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg  max-w-xl">
                    <h1 className="text-xl font-bold mb-6 text-center">About the Founders</h1>
                    <p>Our founders, alumni of IIT Mandi, bring 7+ years of experience
                         in software development and machine learning to our AI-based company. They have a solid
                          background in building large-scale systems and are well-versed in AI. Their combined
                           expertise helps us create a reliable and efficient presale assistant, designed to help
                            businesses scale.</p>
                </div>
            </div>
        </>
    );
}
