import React from "react";
import Container from "react-bootstrap/esm/Container";
import CommonButton from "../button/CommonButton";

const Footer = () => {
  return (
    <div>
      <Container>
        <section id="contact">
          <div
            style={{
              background: "rgb(207 117 121)",
              height: "350px",
              marginTop: "45px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "350px",
              }}
            >
              <div style={{ width: "280px", color: "white" }}>
                <h3 style={{ fontWeight: "600" }}>LET'S STAY IN TOUCH</h3>
                <p>Get updates on sales specials and more</p>
                <input
                  placeholder="Enter your email"
                  style={{
                    width: "inherit",
                    height: "35px",
                    border: "none",
                    marginBottom: "10px",
                  }}
                ></input>

                <CommonButton text={"Send"} />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Footer;
