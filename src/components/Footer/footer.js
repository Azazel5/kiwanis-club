import './footer.scss'

const Footer = props => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__top-child">
                    <h2>About</h2>
                    <hr class="solid"></hr>
                    <a href="$#">Mission</a>
                    <a href="$#">History</a>
                    <a href="$#">Impact</a>
                    <a href="$#">Leadership</a>
                    <a href="$#">Values</a>
                    <a href="$#">Partners</a>
                    <a href="$#">Careers</a>
                </div>
                <div className="footer__top-child">
                    <h2>News</h2>
                    <hr class="solid"></hr>
                    <a href="$#">Stories</a>
                    <a href="$#">Social Media</a>
                    <a href="$#">Media Releases</a>
                    <a href="$#">Share your story</a>
                </div>
                <div className="footer__top-child">Contact</div>
            </div>

            <div className="footer__bottom">
                COPYRIGHT &copy; 2021 KIWANIS NEPAL. ALL RIGHTS RESERVED.
            </div>
        </footer>
    )
}

export default Footer