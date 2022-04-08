import React from "react";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="u-container">
        <div className="Dashboard__card">
          <h1>
            Hello <span>👋</span>
          </h1>
          <p>Here are some instructions to get you going :-)</p>
          <p>
            The problem that this test contains is an actual challenge that we
            faced during the development of our custom account area.
          </p>
          <p>
            The main focus is on data manipulation and presenting order history
            information to a customer by bundling the products from an API call
            in a structured and more readable way.
          </p>
          <p>
            The minimum requirement is to create the responsive order history
            cards as per the design file below. Anything additional is at your
            discretion. If you have applied for a senior position then we would
            also like you to write at least one test of your choice.
          </p>
          <ul>
            <li>
              Here are the design resource previews:
              <ul>
                <li>
                  <a
                    href="https://framer.com/share/Front-End-Tech-Test--6dhH5cOwtSgnnqmyIFEG/S70b7otab#S70b7otab"
                    target="_blank"
                  >
                    Mobile
                  </a>
                </li>
                <li>
                  <a
                    href="https://framer.com/share/Front-End-Tech-Test--6dhH5cOwtSgnnqmyIFEG/C_5Av9SYS#C_5Av9SYS"
                    target="_blank"
                  >
                    Tablet
                  </a>
                </li>
                <li>
                  <a
                    href="https://framer.com/share/Front-End-Tech-Test--6dhH5cOwtSgnnqmyIFEG/WRftPGkMj#WRftPGkMj"
                    target="_blank"
                  >
                    Desktop
                  </a>
                </li>
              </ul>
            </li>
            <li>
              You will be sent an invitation to the actual design files by Alex
              (Lead UI/UX Designer). You can approach the UI and CSS in any way
              you like.
            </li>
            <li>
              Here is the endpoint to pull the data from:{" "}
              <a
                href="https://frontendtest.huel.io/api/line-items"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://frontendtest.huel.io/api/line-items
              </a>
            </li>
            <li>You can install any npm package(s)</li>
          </ul>
          <p>
            If you have any questions just drop us a message. Please upload your
            test to a fresh repo on your own GitHub account.
          </p>
          <p>Good luck!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
