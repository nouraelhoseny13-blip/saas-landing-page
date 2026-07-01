function Stats() {
  const stats = [
    {
      number: "12K+",
      title: "Happy Customers",
    },
    {
      number: "98%",
      title: "Customer Satisfaction",
    },
    {
      number: "250M+",
      title: "Tasks Completed",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="py-24 bg-blue-600">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center text-white"
            >

              <h2 className="text-6xl font-extrabold">
                {item.number}
              </h2>

              <p className="mt-4 text-blue-100 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;