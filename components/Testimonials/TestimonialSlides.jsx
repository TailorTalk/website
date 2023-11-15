function TestimonialSlides({ testimonial }) {
  return (
    <div className="p-3 m-1 md:p-6 md:m-4 mb-12 flex flex-col justify-between bg-white rounded-lg  h-[330px]">
      <div>
        {/* <FaQuoteLeft className="mb-2 text-4xl text-gray-600" /> */}
        <h2 className="mb-3 text-xl font-semibold">"{testimonial.header}"</h2>
        <p className="mb-4 text-gray-800 text-md">{testimonial.text}</p>
      </div>
      <div className="flex items-center">
        <img
          src={testimonial.photo}
          alt={`User dp`}
          className="w-10 h-10 mr-4 rounded-full"
        />
        <div>
          <h6 className="text-lg font-semibold text-gray-700">
            {testimonial.author}
          </h6>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlides;
