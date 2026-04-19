const WhySection = () => {
  return(
    <>
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-10">
            Trusted AC experts serving Lagos Island with fast, reliable, and affordable solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div>
              <i className="fa fa-bolt text-3xl mb-3"></i>
              <h3 className="font-semibold text-lg">Fast Response</h3>
              <p className="text-gray-600 text-sm">Quick service across Lagos Island.</p>
            </div>

            <div>
              <i className="fa fa-wrench text-3xl mb-3"></i>
              <h3 className="font-semibold text-lg">Experienced Technicians</h3>
              <p className="text-gray-600 text-sm">Skilled AC professionals.</p>
            </div>

            <div>
              <i className="fa fa-money text-3xl mb-3"></i>
              <h3 className="font-semibold text-lg">Affordable Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden costs.</p>
            </div>

            <div>
              <i className="fa fa-map-marker text-3xl mb-3"></i>
              <h3 className="font-semibold text-lg">Lagos Island Based</h3>
              <p className="text-gray-600 text-sm">We’re close to you.</p>
            </div>

            <div>
              <i className="fa fa-cogs text-3xl mb-3"></i>
              <h3 className="font-semibold text-lg">All-in-One Services</h3>
              <p className="text-gray-600 text-sm">Repair, install & more.</p>
            </div>

            <div>
              <i className="fa fa-star text-3xl mb-3"></i>
              <h3 className="font-semibold text-lg">Customer Satisfaction</h3>
              <p className="text-gray-600 text-sm">We deliver results.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default WhySection;