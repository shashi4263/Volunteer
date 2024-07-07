import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Community development is at the heart of our mission at Volunteer. Through targeted fundraising efforts, we empower local initiatives that foster growth, education, and well-being. Every donation drives meaningful projects, building stronger, more resilient communities for a brighter future.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Transparency in donation and fundraising is a cornerstone of our operations at volunteer. We are committed to providing clear and detailed reports on how every contribution is allocated and utilized. By maintaining open communication, we build trust and accountability with our donors, ensuring that they feel confident and informed about the impact of their support.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Impact measurement in donation and fundraising is crucial for assessing the effectiveness of our initiatives on the community. At volunteer, we meticulously track and report the outcomes of our projects, demonstrating the tangible benefits of each donation. This process not only ensures that resources are used efficiently but also provides our donors with concrete evidence of the positive change they help create. Through continuous impact measurement, we enhance donor confidence and drive ongoing support for our mission.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
