"use strict";

const e = React.createElement;

const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);
  console.log(liked);

  return (
      <div className="container-sm g-3 mb-4">
        <div className="row">
          <section className="col-sm-5 p-2">
            <p className="explore-title-text">Get Reach Updates</p>
            <p>
              You will be notified with Reach updates, news and announcements.
            </p>
          </section>
          <section className="col-sm-2 p-2">
            <a href="/tut/#tuts">
              <div className="first-row-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="img-fluid p-1 arrow"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <path
                    d="M21.4025 21.9783L21.4025 25.7506L36.3443 25.7639L20.0649 42.0434L22.7402 44.7187L39.0196 28.4393L39.033 43.381L42.8052 43.381L42.8052 21.9783L21.4025 21.9783Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="p-1">
                  <p className="social-text mt-2" >
                    How satisfied are you with the docs?
                  </p>
                </div>
              </div>
            </a>
          </section>
          <section className="col-sm-2 p-2">
            <a href="/tut/#tuts">
              <div className="first-row-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="img-fluid p-1 arrow"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <path
                    d="M21.4025 21.9783L21.4025 25.7506L36.3443 25.7639L20.0649 42.0434L22.7402 44.7187L39.0196 28.4393L39.033 43.381L42.8052 43.381L42.8052 21.9783L21.4025 21.9783Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="p-1">
                  <p className="social-text mt-2">
                    Can you find what you're looking for?
                  </p>
                </div>
              </div>
            </a>
          </section>
          <section className="col-sm-2 p-2">
            <a href="/tut/#tuts">
              <div className="first-row-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="img-fluid p-1 arrow"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <path
                    d="M21.4025 21.9783L21.4025 25.7506L36.3443 25.7639L20.0649 42.0434L22.7402 44.7187L39.0196 28.4393L39.033 43.381L42.8052 43.381L42.8052 21.9783L21.4025 21.9783Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="p-1">
                  <p className="use-text-support mt-2">
                    Found an issue? Help us improve this page
                  </p>
                </div>
              </div>
            </a>
          </section>
        </div>
      </div>
  );
};


function waitForElm(selector) {
    console.log("hello")
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('.footer').then((elm) => {
    console.log('Element is ready');
    const domContainer = document.querySelector(".footer");
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(LikeButton));
});



