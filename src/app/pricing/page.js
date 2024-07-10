import Head from 'next/head';

export default function AboutFounder() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg  max-w-xl">
                    <h1 className="text-xl font-bold mb-6 text-center">Pricing</h1>
                    <p>Currently, we are a very early-stage startup, and we would like to
                         understand your requirements personally and provide a quote.
                    </p>
                </div>
            </div>
        </>
    );
}
