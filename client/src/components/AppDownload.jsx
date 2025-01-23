const AppDownload = () => {
    return (
        <section className="container mx-auto px-6 md:px-16 my-20">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-10 md:p-20 rounded-lg shadow-md text-center lg:text-left">
                {/* Text Section */}
                <div className="mb-8">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                        Why Choose Our Job Portal?
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl">
                        Discover top-notch job opportunities, connect with leading companies, and accelerate your career journey with our seamless platform.
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Verified Jobs</h3>
                        <p className="text-gray-600">
                            Every listing is verified to ensure authenticity and trustworthiness for candidates.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Networking Opportunities</h3>
                        <p className="text-gray-600">
                            Connect with industry professionals and expand your network to discover new career prospects.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">
                            Our support team is always available to help you with any queries or issues.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
