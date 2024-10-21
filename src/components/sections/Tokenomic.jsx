const Tokenomic = () => {
  return (
    <>
      {/* Me3 CTA */}
      <section className="me3-section gap-top-140 gap-bottom-70">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              {/* Heading */}
              <div className="me3-heading gap-bottom-40 me3-text-white">
                <div className="me3-subtitle-1">
                  <span>Our Token</span>
                </div>
                <h2 className="me3-title-2">$ME3 Token</h2>
              </div>

              {/* Text */}
              <div className="me3-cta-text">
                The $ME3 Token is the cornerstone of both governance and utility within our ecosystem, playing a central
                role in our gamified token economy and incentivizing users for engaging in activities such as staking,
                referrals, and gameplay usage.
                <br />
                <br />
                $ME3 Token holders also get rewards in the form of fee discounts, and $ME3 Token stakers earn 20% of
                platform revenues.
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="me3-heading gap-bottom-40 me3-text-white">
                <div className="me3-token">
                  <img
                    src="/images/tokenstatic.webp"
                    alt="tokenstatic"
                    width={"1024"}
                    height={"972"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .me3-section {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}</style>
      </section>
    </>
  );
};

export default Tokenomic;
