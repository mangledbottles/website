
export default function Projects() {
    return (
        <div className="card">

            <div className="columns">
                <div className="column">

                    <header className="card-header">
                        <p className="card-header-title">
                            Projects
                        </p>
                    </header>

                    <div className="card-content">
                        <div className="content">

                            {/* TikTok API */}
                            <div className="block">
                                <h3>TikTok API - Reverse Engineering Private API</h3>

                                <div className="icon-text">
                                    <span className="icon has-text-info">
                                        {/* <i className="fas fa-info-circle"></i> */}
                                        <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M400 320h32a16 16 0 0 1 16 16v128a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H64v320h320V336a16 16 0 0 1 16-16z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M512 24v128c0 21.47-26 32-41 17l-35.71-35.71L191.8 376.77a24 24 0 0 1-33.94 0l-22.63-22.63a24 24 0 0 1 0-33.94L378.76 76.68 343.05 41C328 25.9 338.66 0 360 0h128a24 24 0 0 1 24 24z"></path></g></svg>
                                    </span>
                                    <a href="https://github.com/mangledbottles/Musically-API" target="_blank"><span>https://github.com/mangledbottles/Musically-API</span></a>
                                </div>

                                Reverse engineered the private iOS API for popular social media video app TikTok
                                (formerly Musical.ly). This was done by intercepting requests (Man-in-the-middle attack)
                                with Charles Proxy, disabling the SSL Certification and SSL Certificiate Un-pinning to
                                view requests and responses in plain text. This project is open-sourced on my Github.
                            </div>

                            <div className="block">
                                <h3>End-to-End Encryption Screen Capture</h3>

                                <div className="icon-text">
                                    <span className="icon has-text-info">
                                        {/* <i className="fas fa-info-circle"></i> */}
                                        <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M400 320h32a16 16 0 0 1 16 16v128a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H64v320h320V336a16 16 0 0 1 16-16z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M512 24v128c0 21.47-26 32-41 17l-35.71-35.71L191.8 376.77a24 24 0 0 1-33.94 0l-22.63-22.63a24 24 0 0 1 0-33.94L378.76 76.68 343.05 41C328 25.9 338.66 0 360 0h128a24 24 0 0 1 24 24z"></path></g></svg>
                                    </span>
                                    <a href="https://github.com/mangledbottles/Screencapture-Encrypted" target="_blank"><p>https://github.com/mangledbottles/Screencapture-Encrypted</p></a>
                                </div>

                                Open-source project to create a secure place to store and share screenshot captures.
                                When COVID-19 forced everyone to work from home, many businesses began
                                communications entirely online. Confidential documents, credit card information and
                                private memos are shared via screen captures, many online services place these
                                uploads publically. This open-souce project aims to solve that issue.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}